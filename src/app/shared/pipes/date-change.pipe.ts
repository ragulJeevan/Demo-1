import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'dateChange',
  pure: true
})
export class DateChangePipe implements PipeTransform {
  transform(data: string | Date, format: string, type: string = ''): any {
    if (type === 'Date') {
      return data && data !== null && data !== '' ? moment(data).toDate() : null;
    } else {
      return data && data !== null && data !== '' ? moment(data).format(format) : null;
    }
  }
}

// {{ someDateValue | convertDate:'MM-DD-YYYY':'String' }}

// {{ someDateValue | convertDate:'MM-DD-YYYY':'Date' }}

