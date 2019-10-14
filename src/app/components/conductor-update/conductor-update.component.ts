import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';

import { RutaService } from "../../services/ruta.service";
import { Ruta } from "../../models/ruta";

@Component({
  selector: 'app-conductor-update',
  templateUrl: './conductor-update.component.html',
  styleUrls: ['./conductor-update.component.css'],
  providers: [UserService, ConductorService, RutaService]
})
export class ConductorUpdateComponent implements OnInit {
  public page_title: string; 
  public conductor: Conductor;
  public rutas: Array<Ruta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService,
    private _rutaService: RutaService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getConductor(id);
    });

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
  
  
  getConductor(id){

      this._conductorService.getConductor(id).subscribe(
        response => {
          //if( response.status == 'success' ){
            this.conductor = response;
            this.page_title = 'Editar ' + this.conductor.nombres;//titulo guardar (funciona con el error)
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
    console.log(this.conductor.conductor_id);
    this._conductorService.update(this.conductor,this.conductor.conductor_id).subscribe(
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
