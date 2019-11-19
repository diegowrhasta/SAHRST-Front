import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import { PuntoService } from '../../services/punto.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConductorDetalleComponent} from '../conductor-detalle/conductor-detalle.component';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [UserService, ConductorService, RutaService, PuntoService]
})
export class ConductorComponent implements OnInit {
  public page_title: string;
  public conductores: Array<Conductor>;
  public rutas: Array<Ruta>;
  query: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _conductorService: ConductorService,
    private _rutaService: RutaService,
    private modalService: NgbModal
  ) {
    this.page_title = 'Listado de Conductores';
  }

  ngOnInit() {
    console.log('Conductor cargado correctamente');
    this._conductorService.getConductores().subscribe(
      response => {
          this.conductores = response;
        console.log(response);
      },
      error => {
        this._router.navigate(['login']).then();
      }
    );

    this._rutaService.getRutas().subscribe(
      response => {
          this.rutas = response;
        console.log(response);
      },
      error => {
        this._router.navigate(['login']).then();
      }
    );
  }

  deleteCar(id) {
    this._conductorService.delete(id).subscribe(
      response => {
        this._router.navigate['conductor'];
        location.reload();
        alert('Conductor eliminado correctamente');
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
    this._router.navigate(['conductor-add']);
  }
  conductorDetalle(id: number) {
    const modalRef = this.modalService.open(ConductorDetalleComponent, {centered: true});
    modalRef.componentInstance.id = id;
  }
}
