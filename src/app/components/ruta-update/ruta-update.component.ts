import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    private _activarModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.ruta = this.data;
    this.page_title = 'Editar Ruta';
    console.log(this.data);
  }

  onSubmit(form) {
    // Servicio
    console.log(this.ruta.ruta_id);
    this._rutaService.update(this.ruta, this.ruta.ruta_id).subscribe(
      response => {
        this.status_ruta = 'aceptado';
        console.log(response);
        this._activarModal.dismiss('Success');
      },
      error => {
        this.status_ruta = 'error';
        console.log(<any>error);
      }
    );
  }

}
