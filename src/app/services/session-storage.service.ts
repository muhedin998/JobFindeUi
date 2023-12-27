import { Injectable } from '@angular/core';
import {emptyUser, UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getSessionUser(): UserModel {
    let user = sessionStorage.getItem('user');
    if(!user) {
      return emptyUser;
    }
    return JSON.parse(user);
  }
}
