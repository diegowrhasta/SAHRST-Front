import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'; // prueba GET
import { Conductor } from '../models/conductor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //apiUrl = 'http://jsonplaceholder.typicode.com/users';//prueba GET
  apiUrl = 'http://127.0.0.1:8000/Conductor';
  
  constructor(private _http: HttpClient) { }

  getUsers(){
    //console.log();
    return this._http.get<Conductor[]>(this.apiUrl);//prueba GET
    //return this._http.get<Conductor[]>(this.apiUrl);
  }

}
