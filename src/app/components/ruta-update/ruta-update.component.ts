import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-ruta-update',
  templateUrl: './ruta-update.component.html',
  styleUrls: ['./ruta-update.component.css'],
  providers: [UserService, RutaService]
})
export class RutaUpdateComponent implements OnInit {

  public page_title: string;
  public ruta: Ruta;
  @Input() public data;
  public status_ruta: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService,
    private _activarModal: NgbActiveModal,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit() {
    this.ruta = this.data;
    this.page_title = 'Editar Ruta';
  }

  onSubmit(form) {
    this.dataSharingService.puntoAlertMsg.next('');
    this._rutaService.update(this.ruta, this.ruta.ruta_id).subscribe(
      () => {
        this.dataSharingService.rutaAlertMsg.next('aceptado');
        this._activarModal.dismiss('Success');
      },
      error => {
        this.status_ruta = 'error';
        console.log(<any>error);
      }
    );
  }

}
