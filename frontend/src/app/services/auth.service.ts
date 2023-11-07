import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Profile={
    user:'',
    role:''
  }
  
  constructor(private http:HttpClient) {
    
  }
  getUser(id:any){
   return this.http.get(`http://localhost:5000/api/users/:${id}`)
  }
  auth(profile:any){
    return this.http.post(`http://localhost:5000/api/auth`,profile)
  }
  issavetoken(token:any){
    localStorage.setItem('token',token)
  }
  getrole(token:any){

  }
  
}
