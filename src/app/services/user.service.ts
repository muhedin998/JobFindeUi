import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, map, of, switchMap, tap} from "rxjs";
import {UserModel} from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import {Authenticate} from "../models/authenticate.model";
import {UserVo} from "../models/userVo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../core/store/state/app.state";
import {AddUser, RemoveUser} from "../core/store/actions/user.actions";
import { getUserSelector } from '../core/store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = 'http://localhost:8080';
  currentUser$: BehaviorSubject<UserModel> | null | undefined;

  constructor(private http: HttpClient,
              private store: Store<AppState>) { }

  registerUser(user: UserModel) {
    this.http.post<{ user: UserModel, token: string}>(this.BASE_URL + '/api/v1/auth/register', user).pipe(
        tap((data) => this.addNewUserSession(data))
    ).subscribe(
        data => console.log(data),
        (err) => console.log(err)
    )
  }
  userToUserVo(user: UserModel): UserVo {
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      username: user.username
    }
  }

  addNewUserSession(data: { user: UserModel, token: string}): void {
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('user', JSON.stringify(data.user));
    console.log("Cuvanje u store")
    this.store.dispatch(new AddUser(this.userToUserVo(data.user)))
  }

  loggoutUser(user: Observable<UserVo> | undefined) {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    this.store.dispatch(new RemoveUser())
  }

  isUserSignedIn(): Observable<boolean> {
    let isSignedIn =  this.store.select(getUserSelector).pipe(
      map((data: UserVo) => !!data.username)
    );
    return isSignedIn;
  }
}
