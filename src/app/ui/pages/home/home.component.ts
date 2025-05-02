import {Component, inject, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { JobModel } from 'src/app/models/job.model';
import {HomeService} from "../../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private readonly homeService: HomeService = inject(HomeService);

  isSignedIn?: Observable<boolean> = this.homeService.isUserSignedIn;
  jobPostings?: Observable<JobModel[]> = this.homeService.jobListings.pipe(
      map(job => job.map(j =>({...j, rating: 4.5, category: 'Cleaning', image: 'bamboo-watch.jpg',})))
  );
}
