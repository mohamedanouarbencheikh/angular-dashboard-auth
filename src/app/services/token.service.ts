import {Injectable} from "@angular/core";

@Injectable()
export class TokenService{
  token:any;

  setToken(token:any){
    this.token = token;
  }

  getToken(){
    return this.token;
  }
}
