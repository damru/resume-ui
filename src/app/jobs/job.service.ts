import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { JOBS } from './mock-jobs';

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor() { }

    getJobs(): Job[] {
        return JOBS;
    }
}
