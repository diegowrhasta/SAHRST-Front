import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TipoPuntoService } from '../../services/tipo-punto.service';
import { TipoPunto } from '../../models/tipo-punto';
import { PuntoService } from '../../services/punto.service';
import { Punto } from '../../models/punto';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PuntoRuta} from '../../models/punto-ruta';
import {PuntoRutaService} from '../../services/punto-ruta.service';

@Component({
  selector: 'app-punto-add',
  templateUrl: './punto-add.component.html',
  styleUrls: ['./punto-add.component.css'],
  providers: [UserService, TipoPuntoService, PuntoService, PuntoRutaService]
})
export class PuntoAddComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public punto: Punto;
  public puntoResponse: Punto;
  public puntoRuta: PuntoRuta;
  public status_car: string;
  public tipopuntos: Array<TipoPunto>;
  @Input() public data;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _puntoService: PuntoService,
    private _tipoPuntoService: TipoPuntoService,
    private _activarModal: NgbActiveModal,
    private _puntoRutaService: PuntoRutaService
  ) {
    this.page_title = 'Crear nuevo punto';
  }

  ngOnInit() {
    this.punto = new Punto(1, '', 1);
    this._tipoPuntoService.getTipoPuntos().subscribe(
      response => {
          this.tipopuntos = response;
        console.log(response);
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );
  }

  onSubmit(form) {
    this._puntoService.agregar(this.punto).subscribe(
      (res) => {
        this.puntoResponse = res;
        this.puntoRuta = new PuntoRuta(1, this.puntoResponse.punto_id, this.data, this.puntoResponse.tipo_punto_id);
        this._puntoRutaService.agregar(this.puntoRuta).subscribe(
          response => {
            console.log(response);
            this.status_car = 'aceptado';
            this._activarModal.dismiss('success');
            window.location.reload();
          },
          error => {
            console.log(<any>error);
            this.status_car = 'error';
          }
        );
      },
      error => {
        console.log(<any>error);
        this.status_car = 'error';
      }
    );
  }

}
