import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../models/user";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {TokenService} from "./token.service";

//import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private API_URL= environment.API_URL;

  private username:string="";

 // private currentUserSubject: BehaviorSubject<User> ;
  //public currentUser: Observable<User>;

  constructor(private http: HttpClient, private tokenService: TokenService) {
   // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

 /* public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }*/

  login(username: string, password: string) {
    this.username = username;
    let options = {
      params: new HttpParams().append("username", username).append("password", password)
      ,
     // withCredentials: true
    };
    return this.http.post(this.API_URL+'login-service/login',  null, options);
  }

  logout() {
    let options = {
      headers: new HttpHeaders({'Authorization': this.tokenService.getToken()}),
      params: new HttpParams().append("userName", this.username),
     // withCredentials: true
    };
    return this.http.post(this.API_URL+'login-service/app/logout',  null, options)
  }

}
