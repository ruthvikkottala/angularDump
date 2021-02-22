import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({name: 'dateFormat'})
export class DateFormat implements PipeTransform {
    transform(date: Date): string {
       var format = 'MMMM d, y'
        return new DatePipe('en-US').transform(date, format);
      }
}