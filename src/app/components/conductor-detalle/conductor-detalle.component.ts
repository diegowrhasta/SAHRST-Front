import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Conductor } from '../../models/conductor';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.component.html',
  styleUrls: ['./conductor-detalle.component.css'],
  providers: [UserService, ConductorService]
})
export class ConductorDetalleComponent implements OnInit {

  public conductor: Conductor;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService
  ) { }

  ngOnInit() {
    this.getConductor();
  }
  
  
  getConductor(){
    this._route.params.subscribe(params => {
      let id = +params['id'];

      this._conductorService.getConductor(id).subscribe(
        response => {
          //if( response.status == 'success' ){
            this.conductor = response;
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
