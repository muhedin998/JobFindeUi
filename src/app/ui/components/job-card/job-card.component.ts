import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() jobPostings?: Observable<JobModel[]>;
}
