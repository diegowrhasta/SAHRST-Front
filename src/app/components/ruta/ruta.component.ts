import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css'],
  providers: [UserService, RutaService]
})
export class RutaComponent implements OnInit {

  public page_title: string;
  public rutas: Array<Ruta>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService
  ) { 
    this.page_title = 'Rutas';
    //this.identity = this._userService.getIdentity();
    //this.token = this._userService.getToken();
  }


  ngOnInit() {
    console.log('Ruta cargado correctamente');
    this._rutaService.getRutas().subscribe(
      response => {
        //if( response.status == 'success' ){
          this.rutas = response;
        //}
        console.log(response);
      },
      error => {
        //console.log(error);
        this._router.navigate(['login']).then();
      }
    );
  }

  deleteRuta(id){
    this._rutaService.delete(id).subscribe(
      response => {
        this._router.navigate['ruta'];
        location.reload();
        alert("Ruta eliminada correctamente");
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
