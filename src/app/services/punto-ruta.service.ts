import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class PuntoRutaService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return 'Hola Mundo!!';
  }

  agregar(puntoruta): Observable<any> {
    const json = JSON.stringify(puntoruta);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Punto_Ruta', json, {headers: headers});
  }

  getPuntoRutas(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Punto_Ruta', {headers: headers});
  }

  update(puntoruta, id): Observable<any> {
    const json = JSON.stringify(puntoruta);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.put(this.url + 'Punto_Ruta/' + id, json, {headers: headers});
  }

  deletePuntoRuta(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'Punto_Ruta/' + id, {headers: headers});
  }
}

