import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatDiaMesAno',
})
export class DateFormatDiaMesAno implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        const datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd/MM/yyyy');
        return value;
    }
}