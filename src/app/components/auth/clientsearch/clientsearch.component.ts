import { ActivatedRoute } from '@angular/router';
import { ClientsService } from './../services/clients.service';
import { Client } from './../interfaces/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientsearch',
  templateUrl: './clientsearch.component.html',
  styleUrls: ['./clientsearch.component.css']
})
export class ClientsearchComponent implements OnInit {

  client: Client = {
    name:null,
    lastname:null,
    ci:null
  };
  m_id: Client = {
    name:null,
    lastname:null,
    ci:null
  };
  m_name: Client = {
    name:null,
    lastname:null,
    ci:null
  };
  m_lastname: Client = {
    name:null,
    lastname:null,
    ci:null
  };
  m_ci: Client = {
    name:null,
    lastname:null,
    ci:null
  };
  id:any;
  editing: boolean = false;
  clients: Client[];
  clients1: Client[];

  constructor(private clientsService: ClientsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.clientsService.get().subscribe((data: Client[]) => {
        this.clients = data;
        this.client = this.clients.find((m) => {return m.name==this.id});
        this.m_id=this.client;
        console.log(this.m_id);
      },(error) => {
        console.log(error);
      });
    } else {
      this.editing=false;
    }

  }

  ngOnInit() {
  }

}
