import { Injectable } from '@angular/core';
import { Scholarship } from './scholarship.model';
import { SCHOLARSHIPS } from './mock-scholarship';

@Injectable({
    providedIn: 'root'
})
export class ScholarshipService {

    constructor() { }

    getScholarships(): Scholarship[] {
        return SCHOLARSHIPS;
    }
}
