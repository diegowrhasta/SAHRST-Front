import { Pipe, PipeTransform } from '@angular/core';
import {Ruta} from './models/ruta';
import {Conductor} from './models/conductor';

@Pipe({
  name: 'filtroRutas'
})
export class FiltroRutasPipe implements PipeTransform {

  transform(value: Array<Ruta>, input: string): Array<Ruta> {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: Ruta) {
        return el.nombre.toLowerCase().includes(input);
      });
    }
    return value;
  }

}
