import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JoblistingService {

  BASE_URL: string = 'http://localhost:8080';
  constructor(private http: HttpClient, private router: Router) { }

  createJobListing(joblisting: JobModel) {
    return this.http.post<JobModel>(this.BASE_URL + '/job/create', joblisting).subscribe(data=> {
      this.router.navigateByUrl('/');
      console.log(data)})
  }

}
