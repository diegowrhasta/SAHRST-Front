import { Pipe, PipeTransform } from '@angular/core';
import {Conductor} from './models/conductor';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<Conductor>, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        return el.nombres.toLowerCase().includes(input) || el.ap_materno.toLowerCase().includes(input) || el.ap_paterno.toLowerCase().includes(input);
      });
    }
    return value;
  }

}
