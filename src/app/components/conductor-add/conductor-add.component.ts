import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { RutaService } from '../../services/ruta.service';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css'],
  providers: [UserService, ConductorService, RutaService]
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
    private _conductorService: ConductorService,
    private _rutaService: RutaService,
    private dataSharingService: DataSharingService
  ) {
    this.page_title = 'Crear nuevo conductor';
  }

  ngOnInit() {
    this.conductor = new Conductor('', '', '', '', 1, '', 1, 1);
  }

  onSubmit(form) {
    console.log(this.conductor);
    this._conductorService.agregar(this.conductor).subscribe(
      () => {
        this.dataSharingService.conductorAddedMsg.next('aceptado');
        this._router.navigate(['conductor']).then();
      },
      error => {
        console.log(<any>error);
        this.status_car = 'error';
      }
    );
  }
  back() {
    this._router.navigate(['conductor']).then();
  }

}
