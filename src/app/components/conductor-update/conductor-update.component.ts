import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/conductor';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';
import {Vehiculo} from '../../models/vehiculo';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VehiculoAddComponent} from '../vehiculo-add/vehiculo-add.component';
import {DataSharingService} from '../../services/DataSharing.service';

@Component({
  selector: 'app-conductor-update',
  templateUrl: './conductor-update.component.html',
  styleUrls: ['./conductor-update.component.css'],
  providers: [UserService, ConductorService, RutaService]
})
export class ConductorUpdateComponent implements OnInit {
  public page_title: string;
  public conductor: Conductor;
  public rutas: Array<Ruta>;
  public autosConductor: Array<Vehiculo>;
  selectedFile: File;
  public status_edit: string;
  carAddedStatus: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService,
    private _rutaService: RutaService,
    private modalService: NgbModal,
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.alertMessage.subscribe( value => {
      this.carAddedStatus = value;
    });
  }

  ngOnInit() {
    this.dataSharingService.alertMessage.next('');
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this.getConductor(id);
    });
    this._rutaService.getRutas().subscribe(
      response => {
        // if( response.status == 'success' ){
          this.rutas = response;
        // }
        console.log(response);
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );

  }

  getConductor(id) {
      this._conductorService.getConductor(id).subscribe(
        response => {
          this.conductor = response;
          this.getAutos();
          this.page_title = 'Editar información de Conductor: ' + this.conductor.nombres; // titulo guardar (funciona con el error)
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit(form) {
    // Servicio
    console.log(this.conductor.conductor_id);
    this._conductorService.update(this.conductor, this.conductor.conductor_id).subscribe(
      () => {
        this.status_edit = 'ok';
      },
      error => {
        this.status_edit = 'error';
        console.log(<any>error);
      }
    );
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('avatar', this.selectedFile);
    this._conductorService.uploadImage(uploadData, this.conductor.conductor_id).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        console.log('error', error);
      }
    );
  }

  getAutos() {
    console.log(this.conductor.conductor_id);
    this._conductorService.getAutosConductor(this.conductor.conductor_id).subscribe(
      response => {
        this.autosConductor = response;
        console.log(this.autosConductor);
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );
  }

  back() {
    this._router.navigate(['conductor']).then();
  }

  openNewCar(id: number) {
    const modalRef = this.modalService.open(VehiculoAddComponent);
    modalRef.componentInstance.data = id;
  }
}
