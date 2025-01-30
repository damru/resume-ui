import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateUtils } from '../shared/date-utils';
import { Job } from './job.model';
import { JobService } from './job.service';

@Component({
  selector: 'app-jobs',
  imports: [DatePipe],
  providers: [DatePipe],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  jobs: Job[];

  constructor(private jobService: JobService) { 
    this.jobs = this.jobService.getJobs();
  }

  getDuration(from: string, to: string) {
    return DateUtils.duration(from, to);
  }

}
