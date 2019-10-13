import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TipoPuntoService } from '../../services/tipo-punto.service';
import { TipoPunto } from '../../models/tipo-punto';
import { PuntoService } from '../../services/punto.service';
import { Punto } from '../../models/punto';

@Component({
  selector: 'app-punto-add',
  templateUrl: './punto-add.component.html',
  styleUrls: ['./punto-add.component.css'],
  providers: [UserService, TipoPuntoService, PuntoService]
})
export class PuntoAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public punto: Punto;
  public status_car: string;
  public tipopuntos: Array<TipoPunto>;
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _tipoPuntoService: TipoPuntoService
  ) { 
    this.page_title = 'Crear nuevo punto';
  }

  ngOnInit() {
    this.punto = new Punto(1,'',1);

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

  onSubmit(form){
    console.log(this.punto);
    console.log(this._puntoService.pruebas());
    
    this._puntoService.agregar(this.punto).subscribe(
      response => {
        this._router.navigate(['punto']);
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
