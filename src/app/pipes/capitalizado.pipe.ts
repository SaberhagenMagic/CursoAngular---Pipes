import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  // transform(value: string, ...args: any[]): string {
  transform(value: string, todas: boolean = true): string {
    // console.log(value);
    // console.log(args);

    value = value.toLocaleLowerCase();

    // tslint:disable-next-line:prefer-const
    let nombres = value.split(' ');

    if ( todas ) {

      for ( let i in nombres ) {
        nombres[i] = nombres[i][0].toLocaleUpperCase() + nombres[i].substr(1);
      }

    } else {

      nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substr(1);

    }

    return nombres.join(' ');
  }
}
