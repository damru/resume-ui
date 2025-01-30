import { Component } from '@angular/core';
import { Scholarship } from './scholarship.model';
import { ScholarshipService } from './scholarship.service';

@Component({
  selector: 'app-scholarship',
  imports: [],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.scss'
})
export class ScholarshipComponent {

  scholarships: Scholarship[];

  constructor(private scholarshipService: ScholarshipService) { 
    this.scholarships = this.scholarshipService.getScholarships();
  }
}
