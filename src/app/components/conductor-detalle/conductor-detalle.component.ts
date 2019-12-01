import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Conductor } from '../../models/conductor';
import { ConductorService } from '../../services/conductor.service';
import {Vehiculo} from '../../models/vehiculo';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.component.html',
  styleUrls: ['./conductor-detalle.component.css'],
  providers: [UserService, ConductorService]
})
export class ConductorDetalleComponent implements OnInit {
  @Input() public id;

  public conductor: Conductor;
  public autosConductor: Array<Vehiculo>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _conductorService: ConductorService,
    private modalService: NgbActiveModal
  ) { }

  ngOnInit() {
    this.getConductor();
    this.getAutos();
  }

  getConductor() {
    this._conductorService.getConductor(this.id).subscribe(
      response => {
        this.conductor = response;
      },
      error => {
        console.log(error);
        this._router.navigate(['login']).then();
      }
    );
  }
  getAutos() {
    this._conductorService.getAutosConductor(this.id).subscribe(
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

}
