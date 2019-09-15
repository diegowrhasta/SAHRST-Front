export class Conductor{
    constructor(
        public nombre: string,
        public ap_paterno: string,
        public ap_materno: string,
        public fecha_nacimiento: Date,
        public ci: number,
        public direccion: string,
        public celular: number,
        public telefon: number,
        public ruta_id: string,
        public deleted_at: any,
        public created_at: any,
        public updated_at: any
    ){}
}