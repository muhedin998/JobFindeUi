import { Injectable } from '@angular/core';
import {AppState} from "../core/store/state/app.state";
import {Store} from "@ngrx/store";
import {getUserSelector} from "../core/store/selectors/user.selectors";
import {Observable} from "rxjs";
import {UserVo} from "../models/userVo.model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
      private store: Store<AppState>,
      private userService: UserService) { }

  getCurrentUser(): Observable<UserVo>{
    return this.store.select(getUserSelector);
  }

  loggoutUser(user: Observable<UserVo> | undefined): void {
    this.userService.loggoutUser(user)
  }
}
