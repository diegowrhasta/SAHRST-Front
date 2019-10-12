import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TipoPuntoService } from '../../services/tipo-punto.service';
import { PuntoService } from '../../services/punto.service';
import { TipoPunto } from '../../models/tipo-punto';
import { Punto } from '../../models/punto';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.css'],
  providers: [UserService, PuntoService, TipoPuntoService]
})
export class PuntoComponent implements OnInit {
  public page_title: string;
  public puntos: Array<Punto>;
  public tipopuntos: Array<TipoPunto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _tipoPuntoService: TipoPuntoService
  ) { 
    this.page_title = 'Puntos';
  }

  ngOnInit() {
    console.log('Puntos cargados correctamente');
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
    this._tipoPuntoService.getTipoPuntos().subscribe(
      response => {
        //if( response.status == 'success' ){
          this.tipopuntos = response;
        //}
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePunto(id){
    this._puntoService.deletePunto(id).subscribe(
      response => {
        this._router.navigate['punto'];
        location.reload();
        alert("Punto eliminado correctamente");
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
