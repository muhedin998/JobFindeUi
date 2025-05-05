import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {JoblistingService} from "./joblisting.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private userService: UserService,
              private jobListingService: JoblistingService) { }

  get isUserSignedIn() {
    return this.userService.isUserSignedIn();
  }

  get jobListings() {
    return this.jobListingService.getJobListings();
  }
}
