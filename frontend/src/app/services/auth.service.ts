import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Profile={
    user:'',
    role:''
  }
  helper=new JwtHelperService()
  constructor(private http:HttpClient) {
    
  }
  //for get information about the user 
  getUser(id:any){
   return this.http.get(`http://localhost:5000/api/users/:${id}`)
  }
  //the service of authentification
  login(profile:any){
    return this.http.post(`http://localhost:5000/api/auth`,profile)
  }
  //for save the token in LocalStorage
  savetoken(token:any){
    localStorage.setItem('token',token)
  }
  //get the role of user from token 
  getrole(token:any){
   let decode=this.helper.decodeToken(token);
   return decode.role;
  }
  //for assure that the user is logged in 
  LoggedIn(){
    if (!localStorage.getItem('token')){
      return false;
    }else{
    let token=localStorage.getItem('token')
    let role=this.getrole(token);
    if(this.helper.isTokenExpired(token)){
      return false;
    }
    switch (role){
      case "admin":
        return true;
      case "controler":
        return true;
      case "distrubuter":
        return true;
      case "producteur":
        return true;
      default:
        return false;
    }} 
  }
  
}
