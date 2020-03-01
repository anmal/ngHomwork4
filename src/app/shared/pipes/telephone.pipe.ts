import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(value: number): string {
    const match = value.toString().match(/^(\d{4})(\d{3})(\d{3})$/);
    const formattedPhone = match ? (match[1] + ' ' + match[2] + ' ' + match[3]) : ' wrong number';
    return 'Tel. +' + formattedPhone;
  }

}
