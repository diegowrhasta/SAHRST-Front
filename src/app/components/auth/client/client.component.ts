import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../services/clients.service';
import { Client } from './../interfaces/client.model';

import { environment } from './../../../environments/environment';


import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user.model';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  //API_ENDPOINT = 'http://localhost/ClienteApiRest/public/api';
  clients: Client[];
  user: User[];
  constructor(private auth: AuthService,private clientsService: ClientsService, private http: HttpClient) {
    this.getClients();
  }

  pageActual: number=1;
  filterPost = '';

  getClients(){
        this.clientsService.get().subscribe((data: Client[]) => {
          this.clients = data;
          console.log(JSON.stringify(data));
        },(error) => {
          console.log(error);
          alert('Ocurrio un error');
        });
        //httpClient.get(this.API_ENDPOINT+'/clients').subscribe((data:Client[])=>{
          //this.clients = data;
          //console.log(JSON.stringify(data));
        //});
  }
  client: Client[];

/*
  client: Client;
  clients: Client[];
  constructor(private auth: AuthService, private http: HttpClient) { }
*/
  ngOnInit() {
    /*this.http.get<any>(`${environment.api_url}/clients`).subscribe(data => {
      this.clients = data;
      console.log(data);
    });*/
    this.http.get<any>(`${environment.api_url}/auth/me`).subscribe(data => {
      this.user = data.user;
      console.log(data.user);
    });
  }

  delete(id){
    if (confirm('Seguro que desea eliminar a este cliente?')){
      this.clientsService.delete(id).subscribe((data) => {
        alert('Eliminado con exito');
        console.log(data);
        this.getClients();
      },(error) => {
        console.log(error);
      });

    }
  }

}
