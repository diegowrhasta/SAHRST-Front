import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TipoPuntoService } from '../../services/tipo-punto.service';
import { TipoPunto } from '../../models/tipo-punto';

@Component({
  selector: 'app-tipo-punto-add',
  templateUrl: './tipo-punto-add.component.html',
  styleUrls: ['./tipo-punto-add.component.css'],
  providers: [UserService, TipoPuntoService]
})
export class TipoPuntoAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public tipopunto: TipoPunto;
  public status_car: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tipoPuntoService: TipoPuntoService
  ) { 
    this.page_title = 'Crear nuevo tipo de punto';

  }

  ngOnInit() {
    this.tipopunto = new TipoPunto(1,'');
  }

  onSubmit(form){
    console.log(this.tipopunto);
    console.log(this._tipoPuntoService.pruebas());
    
    this._tipoPuntoService.agregar(this.tipopunto).subscribe(
      response => {
        this._router.navigate(['tipopunto']);
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
