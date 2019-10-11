import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';

@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css'],
  providers: [UserService, RutaService]
})
export class RutaAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public ruta: Ruta;
  public status_ruta: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService
  ) { 
    this.page_title = 'Crear nueva ruta';
    //this.identity = this._userService.getIdentity();
    //this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.ruta = new Ruta(1,'');
  }

  onSubmit(form){
    console.log(this.ruta);
    console.log(this._rutaService.pruebas());
    
    this._rutaService.agregar(this.ruta).subscribe(
      response => {
        this._router.navigate(['ruta']);
        console.log(response);
        this.status_ruta ='aceptado';
      },
      error => {
        console.log(<any>error);
        this.status_ruta ='error';
      }
    );
  }

}
