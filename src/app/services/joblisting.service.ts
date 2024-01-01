import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JoblistingService {

  BASE_URL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  createJobListing(joblisting: JobModel) {
    return this.http.post<JobModel>(this.BASE_URL + '/job/create', joblisting)
  }
  
}
