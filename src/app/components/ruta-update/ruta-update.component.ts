import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';

@Component({
  selector: 'app-ruta-update',
  templateUrl: './ruta-update.component.html',
  styleUrls: ['./ruta-update.component.css'],
  providers: [UserService, RutaService]
})
export class RutaUpdateComponent implements OnInit {

  public page_title: string; 
  public ruta: Ruta;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getRuta(id);
    });
  }

  getRuta(id){

    this._rutaService.getRuta(id).subscribe(
      response => {
        //if( response.status == 'success' ){
          this.ruta = response;
          this.page_title = 'Editar ' + this.ruta.nombre;//titulo guardar (funciona con el error)
        //}
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    //Servicio
    console.log(this.ruta.ruta_id);
    this._rutaService.update(this.ruta,this.ruta.ruta_id).subscribe(
      response => {
        alert("Actualización exitosa");
        console.log(response);
      },
      error => {
        alert("No se actualizó, por favor corrija los datos ingresados");
        console.log(<any>error);
      }
    );
  }

}