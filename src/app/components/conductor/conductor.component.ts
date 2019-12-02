import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import { PuntoService } from '../../services/punto.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConductorDetalleComponent} from '../conductor-detalle/conductor-detalle.component';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [UserService, ConductorService, RutaService, PuntoService]
})
export class ConductorComponent implements OnInit, OnDestroy {
  public page_title: string;
  public conductores: Array<Conductor>;
  public rutas: Array<Ruta>;
  query: String;
  public conductorAddedStatus: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _conductorService: ConductorService,
    private _rutaService: RutaService,
    private modalService: NgbModal,
    private dataSharingService: DataSharingService
  ) {
    this.page_title = 'Listado de Conductores';
    this.dataSharingService.conductorAddedMsg.subscribe( value => {
      this.conductorAddedStatus = value;
    });
  }

  ngOnInit() {
    this._conductorService.getConductores().subscribe(
      response => {
          this.conductores = response;
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );

    this._rutaService.getRutas().subscribe(
      response => {
        this.rutas = response;
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );
  }

  ngOnDestroy(): void {
    this.dataSharingService.conductorAddedMsg.next('');
  }

  deleteConductor(id) {
    this._conductorService.delete(id).subscribe(
      () => {
        this.dataSharingService.conductorAddedMsg.next('eliminado');
        this._router.navigate(['conductor']).then();
        // location.reload();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  refresh() {
    window.location.reload();
  }
  new() {
    this._router.navigate(['conductor-add']).then();
  }
  conductorDetalle(id: number) {
    const modalRef = this.modalService.open(ConductorDetalleComponent, {centered: true});
    modalRef.componentInstance.id = id;
  }
}
