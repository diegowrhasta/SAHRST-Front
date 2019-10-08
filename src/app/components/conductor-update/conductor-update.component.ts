import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Conductor } from '../../models/conductor';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-conductor-update',
  templateUrl: './conductor-update.component.html',
  styleUrls: ['./conductor-update.component.css'],
  providers: [UserService, ConductorService]
})
export class ConductorUpdateComponent implements OnInit {
  public page_title: string; 
  public conductor: Conductor;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getConductor(id);
    });
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
