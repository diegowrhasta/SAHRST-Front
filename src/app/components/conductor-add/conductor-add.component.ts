import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css'],
  providers: [UserService, ConductorService]
})
export class ConductorAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public conductor: Conductor;
  public status_car: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService
  ) { 
    this.page_title = 'Crear nuevo conductor';
    //this.identity = this._userService.getIdentity();
    //this.token = this._userService.getToken();
    
  }

  ngOnInit() {
    this.conductor = new Conductor(1,'','','','',1,'',1,1);
  }


  onSubmit(form){
    console.log(this.conductor);
    console.log(this._conductorService.pruebas());
    
    this._conductorService.agregar(this.conductor).subscribe(
      response => {
        this._router.navigate(['conductor']);
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
