import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {RutaAddComponent} from '../ruta-add/ruta-add.component';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css'],
  providers: [UserService, RutaService]
})
export class RutaComponent implements OnInit, OnDestroy {

  public page_title: string;
  public rutas: Array<Ruta>;
  public ruta_status: string;
  query: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService,
    private modalService: NgbModal,
    private dataSharingService: DataSharingService
  ) {
    this.page_title = 'Listado de Rutas';
    this.dataSharingService.rutaAlertMsg.subscribe( value => {
      this.ruta_status = value;
      this.loadData();
    });
  }


  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.dataSharingService.rutaAlertMsg.next('');
  }

  deleteRuta(id) {
    this._rutaService.delete(id).subscribe(
      () => {
        this._router.navigate(['ruta']).then();
        this.ruta_status = 'eliminado';
        this.loadData();
      },
      error => {
        this.ruta_status = 'error';
        console.log(<any>error);
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }
  openAdd() {
    const modalRef = this.modalService.open(RutaAddComponent);
    modalRef.componentInstance.title = 'Nueva Ruta';
  }
  loadData() {
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
}
