import { Injectable } from '@angular/core';
import { log } from 'console';
import DateDiff from 'date-diff';

@Injectable({
  providedIn: 'root'
})
export class DateUtils {

  constructor() { }

  static duration(from: string, to: string): String {
    const dateFrom = from ? new Date(from) : new Date();
    const dateTo = to ? new Date(to) : new Date();
    const diff = new DateDiff(dateFrom, dateTo);
    const y = diff.years() > 0 ?
      diff.years() > 1 ?
        diff.years() + ' years '
        : diff.years() + ' year '
      : '';
    const m = diff.months() > 0 ?
      diff.months() > 1 ?
        diff.months() + ' months '
        : diff.months() + ' month '
      : '';
    return y + m;
  }

}
