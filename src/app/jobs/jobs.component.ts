import { Component, OnInit } from '@angular/core';
import { DateUtils } from '../shared/date-utils';

@Component({
  selector: 'app-jobs',
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {

  ngOnInit(): void {
  }

  getDuration(from: string, to: string) {
    return DateUtils.duration(from, to);
  }

}
