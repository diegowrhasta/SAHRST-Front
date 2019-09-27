import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';//prueba GET
import { Conductor } from '../../../models/conductor.model';
import { DataService } from '../../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { ConductorService } from '../../../services/conductor.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  apiUrl = 'http://0.0.0.0:8000';

  //users$: User[];//prueba GET
  conductors$: Conductor[];
  constructor(private conductorService: ConductorService, private httpClient: HttpClient) { 
    httpClient.get(this.apiUrl+'/Conductor').subscribe((data)=>{
      console.log();
    });
  }

  ngOnInit() {
/*    return this.dataService.getUsers()
      .subscribe(data => this.conductors$ = data);*/
  }

}
