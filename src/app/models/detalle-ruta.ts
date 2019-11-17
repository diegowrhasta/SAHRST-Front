export class DetalleRuta {
  constructor(
    public punto_ruta_id: number,
    public ruta_id: number,
    public punto_id: number,
    public nombre_punto: string,
    public tipo_punto: string
  ) {}
}
