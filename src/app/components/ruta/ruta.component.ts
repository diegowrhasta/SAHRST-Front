import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {RutaUpdateComponent} from '../ruta-update/ruta-update.component';
import {RutaAddComponent} from '../ruta-add/ruta-add.component';

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
    private _rutaService: RutaService,
    private modalService: NgbModal
  ) {
    this.page_title = 'Rutas';
  }


  ngOnInit() {
    console.log('Ruta cargado correctamente');
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

  deleteRuta(id) {
    this._rutaService.delete(id).subscribe(
      response => {
        this._router.navigate['ruta'];
        location.reload();
        alert('Ruta eliminada correctamente');
      },
      error => {
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

  openEdit(ruta: Ruta) {
    const modalRef = this.modalService.open(RutaUpdateComponent);
    modalRef.componentInstance.data = ruta;
  }
}
