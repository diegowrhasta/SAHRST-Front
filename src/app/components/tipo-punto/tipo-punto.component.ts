import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TipoPuntoService } from '../../services/tipo-punto.service';
import { TipoPunto } from '../../models/tipo-punto';

@Component({
  selector: 'app-tipo-punto',
  templateUrl: './tipo-punto.component.html',
  styleUrls: ['./tipo-punto.component.css'],
  providers: [UserService, TipoPuntoService]
})
export class TipoPuntoComponent implements OnInit {
  public page_title: string;
  public tipopuntos: Array<TipoPunto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tipoPuntoService: TipoPuntoService
  ) { 
    this.page_title = 'Tipo de Puntos';
  }

  ngOnInit() {
    console.log('Tipo de puntos cargado correctamente');
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

  deleteTipoPunto(id){
    this._tipoPuntoService.deleteTipoPunto(id).subscribe(
      response => {
        this._router.navigate['tipopunto'];
        location.reload();
        alert("Tipo de punto eliminado correctamente");
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
