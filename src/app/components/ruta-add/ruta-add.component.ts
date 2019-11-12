import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalAboutComponent} from '../../modal-about/modal-about.component';

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
  public status_ruta: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _rutaService: RutaService,
    private _activarModal: NgbActiveModal
  ) {
    this.page_title = 'Crear nueva ruta';
  }

  ngOnInit() {
    this.ruta = new Ruta(1, '');
  }

  onSubmit(form) {
    console.log(this.ruta);
    console.log(this._rutaService.pruebas());

    this._rutaService.agregar(this.ruta).subscribe(
      response => {
        console.log(response);
        this.status_ruta = 'aceptado';
        this._activarModal.dismiss('Success');
        window.location.reload();
      },
      error => {
        console.log(<any>error);
        this.status_ruta = 'error';
      }
    );
  }
}
