import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  login(user:any,password:any){
let userv={
  username:user,
  password:password
}
  return  this.httpClient.post(  'http://localhost:40126/api/Account/Login',userv)
  }
  getToken(){
if (localStorage.hasOwnProperty('authenticationToken'))
return localStorage.getItem('authenticationToken');

return null;
  }
}
