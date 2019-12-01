import {Optional} from '@angular/core';

export class Conductor {
    constructor(
      public nombres: string,
      public ap_paterno: string,
      public ap_materno: string,
      public fecha_nacimiento: string,
      public ci: number,
      public direccion: string,
      public celular: number,
      public telefono: number,
      public conductor_id?: number,
      public ruta_id?: number,
      public avatar?: string,
      public next_punto_control?: number
    ) {}
}
