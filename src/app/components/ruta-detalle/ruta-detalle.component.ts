import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import {DetalleRuta} from '../../models/detalle-ruta';

@Component({
  selector: 'app-ruta-detalle',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.css'],
  providers: [UserService, RutaService]
})
export class RutaDetalleComponent implements OnInit {

  public ruta: Ruta;
  public puntos: Array<DetalleRuta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService
  ) { }

  ngOnInit() {
    this.getPuntosRuta();
    this.getRuta();
  }
  getRuta() {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this._rutaService.getRuta(id).subscribe(
        response => {
          this.ruta = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  getPuntosRuta() {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this._rutaService.getPuntosRuta(id).subscribe(
        response => {
            this.puntos = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  deletePuntoRuta(punto_id: number) {
    console.log('eliminado: ' + punto_id);
  }

  refresh() {
    window.location.reload();
  }
}
