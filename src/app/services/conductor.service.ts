import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Conductor } from '../models/conductor';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class ConductorService {

  public url: string;

  //headers = new Headers();

  constructor(
    private router: Router,
    public _http: HttpClient
    ) { 
    this.url = GLOBAL.url;
    //this.headers.append("Content-type","application/json");
    //this.headers.append("Authorization","Bearer "+localStorage.getItem("access_token"));
  }

  pruebas(){
    return "Hola Mundo!!";
  }

  agregar(conductor): Observable<any>{
    let json = JSON.stringify(conductor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'Conductor', json, {headers: headers});
  }

  getConductores():Observable<any>{
    //if(localStorage.getItem('access_token')){
      let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
      return this._http.get(this.url+'Conductor', {headers: headers});  
    //}
    //console.log("no logueado");
    //this.router.navigate(['login']).then();
  }

  getConductor(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Conductor/' + id, {headers: headers});
  }

  update(conductor,id): Observable<any>{
    let json = JSON.stringify(conductor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'Conductor/' + id, json, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url+'Conductor/' + id, {headers: headers});
  }
  
}
