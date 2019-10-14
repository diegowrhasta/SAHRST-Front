import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PuntoService } from '../../services/punto.service';
import { Punto } from '../../models/punto';
import { PuntoRutaService } from '../../services/punto-ruta.service';
import { PuntoRuta } from '../../models/punto-ruta';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';

@Component({
  selector: 'app-punto-ruta-add',
  templateUrl: './punto-ruta-add.component.html',
  styleUrls: ['./punto-ruta-add.component.css'],
  providers: [UserService, PuntoRutaService, PuntoService, RutaService]
})
export class PuntoRutaAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public puntoruta: PuntoRuta;
  public status_car: string;
  public puntos: Array<Punto>;
  public rutas: Array<Ruta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _rutaService: RutaService,
    private _puntoRutaService: PuntoRutaService
  ) { 
    this.page_title = 'Crear nuevo punto-ruta';
  }

  ngOnInit() {
    this.puntoruta = new PuntoRuta(1,1,1,1);

    this._puntoService.getPuntos().subscribe(
      response => {
        //if( response.status == 'success' ){
          this.puntos = response;
        //}
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this._rutaService.getRutas().subscribe(
      response => {
        //if( response.status == 'success' ){
          this.rutas = response;
        //}
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    console.log(this.puntoruta);
    console.log(this._puntoRutaService.pruebas());
    
    this._puntoRutaService.agregar(this.puntoruta).subscribe(
      response => {
        this._router.navigate(['punto-ruta']);
        console.log(response);
        this.status_car ='aceptado';
      },
      error => {
        console.log(<any>error);
        this.status_car ='error';
      }
    );
  }

}

