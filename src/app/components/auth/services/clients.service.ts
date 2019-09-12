import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../interfaces/user.model';
import 'rxjs/add/operator/do'

import { Client } from './../interfaces/client.model';

@Injectable()
export class ClientsService {

  API_ENDPOINT = 'http://localhost/ClienteApiRest/public/api';

  constructor(private httpClient: HttpClient ) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/clients');
  }
  getname(client){
    return this.httpClient.get(this.API_ENDPOINT+'/clients/'+client.id);
  }

  save(client: Client){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/client_addition',client,{headers: headers});
  }

  put(client){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/client_actualization/'+client.id,client,{headers: headers});
  }

  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT+'/client_delete/'+id);
  }
}
