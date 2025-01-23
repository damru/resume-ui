import { Component, OnInit } from '@angular/core';
import { DateUtils } from '../shared/date-utils';
import { JobsComponent } from './jobs/jobs.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';

@Component({
    imports: [JobsComponent, ScholarshipComponent],
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    getDuration(from: string, to: string) {
        return DateUtils.duration(from, to);
    }

}
