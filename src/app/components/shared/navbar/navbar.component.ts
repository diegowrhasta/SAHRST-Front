import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';//prueba GET
//import { Conductor } from '../../../models/conductor';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  users$: User[];//prueba GET
  //conductor$: Conductor[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.users$ = data);
  }

}
