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
  selector: 'app-punto-ruta',
  templateUrl: './punto-ruta.component.html',
  styleUrls: ['./punto-ruta.component.css'],
  providers: [UserService, PuntoRutaService, PuntoService, RutaService]
})
export class PuntoRutaComponent implements OnInit {

  public page_title: string;
  public puntos: Array<Punto>;
  public rutas: Array<Ruta>;
  public puntorutas: Array<PuntoRuta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _rutaService: RutaService,
    private _puntoRutaService: PuntoRutaService
  ) {
    this.page_title = 'Puntos - Rutas';

  }

  ngOnInit() {
    console.log('Puntos-Rutas cargados correctamente');
    this._puntoService.getPuntos().subscribe(
      response => {
          this.puntos = response;
        console.log(response);
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );
    this._rutaService.getRutas().subscribe(
      response => {
          this.rutas = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this._puntoRutaService.getPuntoRutas().subscribe(
      response => {
          this.puntorutas = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePuntoRuta(id) {
    this._puntoRutaService.deletePuntoRuta(id).subscribe(
      response => {
        this._router.navigate['punto-ruta'];
        location.reload();
        alert('Punto ruta eliminado correctamente');
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
