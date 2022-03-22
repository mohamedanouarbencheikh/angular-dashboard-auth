import {HttpBackend, HttpClient, HttpContext, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";
import {User} from "../models/user";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }
  addUser(user:User) {
    let options = {
      headers: new HttpHeaders({'Authorization': this.tokenService.getToken()})
      // withCredentials: true
    };
    return this.http.post(this.API_URL + 'login-service/app/addUser', user, options)
  }

  getUsers() {
    let options = {
      headers: new HttpHeaders({'Authorization': this.tokenService.getToken()})
      // withCredentials: true
    };
    return this.http.get(this.API_URL + 'login-service/app/getUsers', options)
  }
  }
