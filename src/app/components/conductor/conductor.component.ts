import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';

import { RutaService } from "../../services/ruta.service";
import { Ruta } from "../../models/ruta";

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [UserService, ConductorService, RutaService]
})
export class ConductorComponent implements OnInit {
  public page_title: string;
  public conductores: Array<Conductor>;
  public rutas: Array<Ruta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService,
    private _rutaService: RutaService
  ) { 
    this.page_title = 'Conductores';
    //this.identity = this._userService.getIdentity();
    //this.token = this._userService.getToken();
    
  }

  ngOnInit() {
    console.log('Conductor cargado correctamente');
    this._conductorService.getConductores().subscribe(
      response => {
        //if( response.status == 'success' ){
          this.conductores = response;
        //}
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

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

  deleteCar(id){
    this._conductorService.delete(id).subscribe(
      response => {
        this._router.navigate['conductor'];
        location.reload();
        alert("Conductor eliminado correctamente");
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
