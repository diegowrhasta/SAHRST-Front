import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class RutaService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return 'Hola Mundo!!';
  }

  agregar(ruta): Observable<any> {
    const json = JSON.stringify(ruta);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Ruta', json, {headers: headers});
  }

  getRutas(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Ruta', {headers: headers});
  }

  getRuta(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Ruta/' + id, {headers: headers});
  }

  getPuntosRuta(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Ruta/' + id + '/getPuntos', {headers: headers});
  }

  update(conductor, id): Observable<any> {
    const json = JSON.stringify(conductor);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.put(this.url + 'Ruta/' + id, json, {headers: headers});
  }

  delete(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'Ruta/' + id, {headers: headers});
  }

  deletePuntoRuta(id) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'Punto_Ruta/' + id, {headers: headers});
  }
}
