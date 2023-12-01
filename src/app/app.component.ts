import { Component } from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobfinder-ui';
  constructor(private appService: AppService) {
    appService.getJobPostings().subscribe(data => console.log((data)))
  }
}
