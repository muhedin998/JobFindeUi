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
  user$?: Observable<string | undefined>;
  userForLogout?: Observable<UserVo>; 
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.userForLogout = this.headerService.getCurrentUser();
    this.user$ = this.headerService.getCurrentUser().pipe(
      map(user => user.fullName)
    );
    this.user$.subscribe(data => console.log(data))
  }

  logout() {
     this.headerService.loggoutUser(this.userForLogout);
  }
}
