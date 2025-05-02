import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {map, Observable} from "rxjs";
import {UserVo} from "../../models/userVo.model";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$?: Observable<string | undefined>;
  userForLogout?: Observable<UserVo>;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]

    this.userForLogout = this.headerService.getCurrentUser();
    this.user$ = this.headerService.getCurrentUser().pipe(
        map(user => user.fullName)
    );
    this.user$.subscribe(data => console.log(data))
  }
  constructor(private headerService: HeaderService) { }

  logout() {
     this.headerService.loggoutUser(this.userForLogout);
  }
}
