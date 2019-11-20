import {Component, Input, OnInit} from '@angular/core';
import {Vehiculo} from '../../models/vehiculo';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConductorService} from '../../services/conductor.service';
import {VehiculoConductor} from '../../models/vehiculo-conductor';

@Component({
  selector: 'app-vehiculo-add',
  templateUrl: './vehiculo-add.component.html',
  styleUrls: ['./vehiculo-add.component.css'],
  providers: [ConductorService]
})
export class  VehiculoAddComponent implements OnInit {

  @Input() data: number;
  public page_title: string;
  public vehiculo: Vehiculo;
  public vehiculoResponse: Vehiculo;
  public conductorVehiculo: VehiculoConductor;
  public status_car: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _conductorService: ConductorService,
    private _activarModal: NgbActiveModal
  ) {
    this.page_title = 'Añadir Vehículo';
  }

  ngOnInit() {
    this.vehiculo = new Vehiculo(1, '', 1, '', '');
  }

  onSubmit(form) {
    this._conductorService.agregarAuto(this.vehiculo).subscribe(
      response => {
        this.vehiculoResponse = response;
        this.conductorVehiculo = new VehiculoConductor(this.vehiculoResponse.vehiculo_id, this.data);
        this._conductorService.agregarAutoConductor(this.conductorVehiculo).subscribe(
          () => {
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
