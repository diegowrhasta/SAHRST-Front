import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Conductor } from '../models/conductor';

@Injectable()
export class ConductorService {
  public url: string;
  constructor(
    private _http: HttpClient
    ) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return 'Hola Mundo!!';
  }

  agregar(conductor): Observable<any> {
    const json = JSON.stringify(conductor);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Conductor', json, {headers: headers});
  }

  agregarAuto(auto): Observable<any> {
    const json = JSON.stringify(auto);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Vehiculo', json, {headers: headers});
  }

  agregarAutoConductor(autoConductor): Observable<any> {
    const json = JSON.stringify(autoConductor);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Conductor_Vehiculo', json, {headers: headers});
  }

  getConductores(): Observable<any> {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
      return this._http.get(this.url + 'Conductor', {headers: headers});
  }

  getConductor(id): Observable<any>  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Conductor/' + id, {headers: headers});
  }

  update(conductor, id): Observable<any> {
    const json = JSON.stringify(conductor);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.put(this.url + 'Conductor/' + id, json, {headers: headers});
  }

  delete(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'Conductor/' + id, {headers: headers});
  }

  uploadImage(uploadData: FormData, conductor_id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this._http.post(this.url  + 'Conductor/' + conductor_id + '/profile_pic', uploadData, {headers: headers});
  }

  getAutosConductor(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this._http.get(this.url  + 'Conductor/' + id + '/Vehiculo', {headers: headers});
  }
}
