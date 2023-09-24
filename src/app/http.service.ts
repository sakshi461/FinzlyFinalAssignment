import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

 // baseUrl:string ='http://localhost:8080/';
  baseUrl:string=environment.baseUrl;


login(obj:any){
    return (this.http.post(`${this.baseUrl}getCustomerById`,obj));
  }





}
