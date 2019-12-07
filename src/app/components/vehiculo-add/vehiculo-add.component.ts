import {Component, Input, OnInit} from '@angular/core';
import {Vehiculo} from '../../models/vehiculo';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConductorService} from '../../services/conductor.service';
import {VehiculoConductor} from '../../models/vehiculo-conductor';
import {DataSharingService} from '../../services/DataSharing.service';
import { NgForm } from '@angular/forms';

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
    private _activarModal: NgbActiveModal,
    private dataSharingService: DataSharingService
  ) {
    this.page_title = 'Añadir Vehículo';
  }

  ngOnInit() {
    this.vehiculo = new Vehiculo(1,1, '', 1, '', '');
  }
  onSubmit(autoNew: NgForm) {
    //console.log(autoNew.value.vehiculo_id);
    console.log(autoNew.value.placa);
    console.log(autoNew.value.placab);
    console.log(autoNew.value.modelo);
    console.log(autoNew.value.marca);
    console.log(autoNew.value.color);

    this._conductorService.agregarAuto(
      autoNew.value.placa+autoNew.value.placab,
      autoNew.value.modelo,
      autoNew.value.marca,
      autoNew.value.color).subscribe(
      response => {
        console.log(response);
        //this.vehiculoResponse = response;
        this.conductorVehiculo = new VehiculoConductor(response["vehiculo_id"], this.data);
        this._conductorService.agregarAutoConductor(this.conductorVehiculo).subscribe(
          () => {
            this.status_car = 'aceptado';
            this.dataSharingService.carAddedMessage.next('aceptado');
            this._activarModal.dismiss('success');
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

  /*onSubmit(form) {
    this._conductorService.agregarAuto(this.vehiculo).subscribe(
      response => {
        this.vehiculoResponse = response;
        this.conductorVehiculo = new VehiculoConductor(this.vehiculoResponse.vehiculo_id, this.data);
        this._conductorService.agregarAutoConductor(this.conductorVehiculo).subscribe(
          () => {
            this.status_car = 'aceptado';
            this.dataSharingService.carAddedMessage.next('aceptado');
            this._activarModal.dismiss('success');
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
  }*/

}
