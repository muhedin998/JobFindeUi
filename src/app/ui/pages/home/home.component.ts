import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, map, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isSignedIn?: Observable<boolean>;
  jobPostings?: Observable<JobModel[]>;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.isSignedIn  = this.userService.isUserSignedIn();
    this.jobPostings = this.http.get<JobModel[]>("http://localhost:8080/job/get-all-jobs")
  }

}
