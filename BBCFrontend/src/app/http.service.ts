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


//login(obj:any){
  //  return (this.http.post(`${this.baseUrl}getCustomerById`,obj));
 // }
 getUserDetailsById(customerid:any)
 {
  return (this.http.get(`${this.baseUrl}/customer/getCustomerById/{customerid}`));
 }

 login(customerid:any){
  let id=+customerid;
  console.log(id);
  return (this.http.get(`${this.baseUrl}customer/check/${id}`,{
    responseType:'text'
  }));
 }

//  goToPreviousBills(customerid:any){
//   console.log(customerid);
//   return (this.http.get(`${this.baseUrl}/customer/getCustomerById/{customerid}`));
// }

 viewDetails(id:any){
  let customerid=+id;
    return  (this.http.get(`${this.baseUrl}customer/getCustomerById/${id}`)) 
  }
  getAllTransactionByPaymentStatus()
  {
    
  }



}
