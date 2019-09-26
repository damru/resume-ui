import { Component, OnInit } from '@angular/core';
import { ExperiencesComponent } from '../experiences.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['../experiences.component.scss', './jobs.component.scss']
})
export class JobsComponent extends ExperiencesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
