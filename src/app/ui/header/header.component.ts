import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {map, Observable} from "rxjs";
import {UserVo} from "../../models/userVo.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<UserVo> = this.headerService.getCurrentUser();
  userFullName$: Observable<string> =this.user$.pipe(
      map(user => user.fullName));
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  logout() {
    this.headerService.loggoutUser(this.user$);
  }
}
