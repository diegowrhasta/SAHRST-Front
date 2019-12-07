import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataSharingService} from '../../services/DataSharing.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css'],
  providers: [UserService, RutaService]
})
export class RutaAddComponent implements OnInit {

  @Input() title = `Information`;

  public page_title: string;
  public identity;
  public token;
  public ruta: Ruta;
  public rutaResponse: Ruta;
  public status_ruta: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService,
    private _activarModal: NgbActiveModal,
    private dataSharingService: DataSharingService
  ) {
    this.page_title = 'Crear nueva ruta';
  }

  ngOnInit() {
    this.ruta = new Ruta(1, '','');
  }

  onSubmit(rutaNew: NgForm) {
    this._rutaService.agregar(
      rutaNew.value.nombre+" - "+rutaNew.value.nombreb
    ).subscribe(
      response => {
        this.rutaResponse = response;
        this.status_ruta = 'aceptado';
        this.dataSharingService.rutaAlertMsg.next('aceptado');
        this._activarModal.dismiss('Success');
      },
      error => {
        console.log(<any>error);
        this.dataSharingService.rutaAlertMsg.next('error');
        this.status_ruta = 'error';
      }
    );
  }
}
