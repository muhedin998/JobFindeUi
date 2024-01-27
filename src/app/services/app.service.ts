import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BASE_URL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  initApp() {
    this.getUsers();
    this.getJobPostings();

  }

  public getUsers() {
    return this.http.get(this.BASE_URL + '/user/user/all')
  }
  public getJobPostings() {
    return this.http.get(this.BASE_URL + '/job/get-all-jobs')
  }
  public getJobByTitle(title: string) {
    return this.http.get(this.BASE_URL + '/job/' + title);
  }
}
