import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';

@Component({
  selector: 'app-ruta-detalle',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.css'],
  providers: [UserService, RutaService]
})
export class RutaDetalleComponent implements OnInit {

  public ruta: Ruta;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService
  ) { }

  ngOnInit() {
    this.getRuta();
  }

  getRuta(){
    this._route.params.subscribe(params => {
      let id = +params['id'];

      this._rutaService.getRuta(id).subscribe(
        response => {
          //if( response.status == 'success' ){
            this.ruta = response;
          //}
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
