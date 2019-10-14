export class Conductor{
    constructor(
        public conductor_id: number,
        public nombres: string,
        public ap_paterno: string,
        public ap_materno: string,
        public fecha_nacimiento: string,
        public ci: number,
        public direccion: string,
        public celular: number,
        public telefono: number,
        public ruta_id: number
    ){}
}