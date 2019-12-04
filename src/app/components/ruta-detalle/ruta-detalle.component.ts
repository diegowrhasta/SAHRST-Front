import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import {DetalleRuta} from '../../models/detalle-ruta';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PuntoAddComponent} from '../punto-add/punto-add.component';
import {RutaUpdateComponent} from '../ruta-update/ruta-update.component';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-ruta-detalle',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.css'],
  providers: [UserService, RutaService]
})
export class RutaDetalleComponent implements OnInit, OnDestroy {

  public ruta: Ruta;
  public puntos: Array<DetalleRuta>;
  public punto_status: string;
  public ruta_status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService,
    private modalService: NgbModal,
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.rutaAlertMsg.subscribe(value => {
      this.ruta_status = value;
    });
    this.dataSharingService.puntoAlertMsg.subscribe(value => {
      this.punto_status = value;
      this.getPuntosRuta();
    });
  }

  ngOnInit() {
    this.getRuta();
    this.getPuntosRuta();
  }
  ngOnDestroy(): void {
    this.dataSharingService.rutaAlertMsg.next('');
    this.dataSharingService.puntoAlertMsg.next('');
  }

  getRuta() {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this._rutaService.getRuta(id).subscribe(
        response => {
          this.ruta = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  getPuntosRuta() {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this._rutaService.getPuntosRuta(id).subscribe(
        response => {
            this.puntos = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  deletePuntoRuta(punto_id: number) {
    this._route.params.subscribe(() => {
      this._rutaService.deletePuntoRuta(punto_id).subscribe(
        () => {
          this.punto_status = 'eliminado';
          this.getPuntosRuta();
        },
        error => {
          console.log(error);
          this.punto_status = 'error';
        }
      );
    });
  }


  refresh() {
    window.location.reload();
  }

  openAddPunto(ruta_id: number) {
    const modalRef = this.modalService.open(PuntoAddComponent);
    modalRef.componentInstance.data = ruta_id;
  }

  openEditName(ruta: Ruta) {
    const modalRef = this.modalService.open(RutaUpdateComponent);
    modalRef.componentInstance.data = ruta;
  }
}
