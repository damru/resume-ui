import { Component } from '@angular/core';
import { JobsComponent } from '../jobs/jobs.component'
import { ScholarshipComponent } from '../scholarship/scholarship.component'

@Component({
  selector: 'app-experiences',
  imports: [JobsComponent, ScholarshipComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

}
