import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user';


@Injectable()
export class UserService {

  public url: string;

  //headers = new Headers();

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
    //this.headers.append("Content-type","application/json");
    //this.headers.append("Authorization","Bearer "+localStorage.getItem("access_token"));
  }

  pruebas(){
    return "Hola Mundo!!";
  }

  register(user){
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'register', params, {headers: headers});
  }

  signup(user): Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;
//    let headers = new HttpHeaders().set('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM3ZWE3YThmZTZhNDIyYWY3NWM1YjQ0NzcyNjJlODcxMGVhNGRjZDg2Y2E1ZGUxNzA5N2U4NmE2ZWNiYzExNmQwNDFjZmNlOGI5ZmM4NzJmIn0.eyJhdWQiOiIzIiwianRpIjoiMzdlYTdhOGZlNmE0MjJhZjc1YzViNDQ3NzI2MmU4NzEwZWE0ZGNkODZjYTVkZTE3MDk3ZTg2YTZlY2JjMTE2ZDA0MWNmY2U4YjlmYzg3MmYiLCJpYXQiOjE1Njk5ODM4MTgsIm5iZiI6MTU2OTk4MzgxOCwiZXhwIjoxNjAxNjA2MjE3LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.DUb_BwfuqKVn855yCu83zpo4TRku9PiChapyaf7lNheEnUqkstukycAo4scQ6yOOei9AqaK0sqRJ6wankbNORhEmfpAFr-ldvfVNXSdapMRHJzPpznpdN1zAqt6_25GNLDEj9fvkznHQ9dn7GY0X05-YEP8ApLTkwujSIkypjWqwD2-rFSe9-jicnH6a-1fHhg5hWFsZoQo0ic4AJdxEuxHXua9YDxnKqF94tAboAUuOchLj50BrW1VNBgeEXjs58vDY6POL5yA48zx2mTiOUy1qCKr0F5ezGAQPL7UD_BkK5D1_mqk0B-5PkrP27ktirEJGokRf6E5mF2iZASA4ewqyF8igCAhh-R7lY4-EZX4a-kWsWDfIEfuP2pWnjpCL8I4HBjYTTVxMJpViQJvMBtYXZPOZ7AdLVLekz_Eevjw56CZEP0nRQFjVOKdbzZ7Id95QPVRCfp_GmPsXLRkDh_4z8pc_bt2TxMgIlHDSaNJ-KSGYZeLx5MIEm3Kw4T8kDsXsw56DgdvvDIs61Vrq_MyMRenKuW_ZbRiYDKVCTXKYYb3R-sQH61BEo2qZUuP3NU1s4X15AQA-65KTlP-3Y_6nnnlTqqm5TqRYHMactvEz9MwuLL_fLOThj_EGauCtSgSuXw1ZhmdgPQxMLpRA9vNzwEzfENSsdyiqGq2WLU8','Content-Type', 'application/x-www-form-urlencoded');

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'auth/login', params, {headers: headers});
  }

  /*getUsers() {
    
    console.log(this.http.get('http://127.0.0.1:8000/api/Conductor', { }));
    return this.http.get('http://127.0.0.1:8000/api/Conductor');
  }*/

}
