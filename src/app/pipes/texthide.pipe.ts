import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texthide'
})
export class TexthidePipe implements PipeTransform {

  transform(value: string, hide: boolean = true): string {

    // if (hide) {
    //   let txtHd = '';
    //   for ( let i = 0; i < value.length; i++) {
    //     txtHd += '*';
    //   }
    //   return txtHd;
    // } else {
    //   return value;
    // }

    return hide ? value.replace(/./g, '*') : value;

  }

}
