import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Authenticate} from "../models/authenticate.model";
import * as http from "http";
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {UserModel} from "../models/user.model";
import {AddUser} from "../core/store/actions/user.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../core/store/state/app.state";
import {UserVo} from "../models/userVo.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  BASE_URL: string = 'http://localhost:8080';
  currentUser$: BehaviorSubject<UserModel> | null | undefined;

  constructor(private http: HttpClient,
              private store: Store<AppState>,
              private router: Router) { }

  authenticateUser(user: Authenticate): any  {
    return this.http.post<{ user: UserModel, token: string} >(this.BASE_URL + '/api/v1/auth/authenticate', user).pipe(
        tap((data) =>
        {
          console.log(data.user);
          sessionStorage.setItem('user', JSON.stringify(data.user));
          this.store.dispatch(new AddUser(this.userToUserVo(data.user)))
          sessionStorage.setItem('token', data.token)
          this.router.navigateByUrl('/');
        })
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

}
