import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TokenService} from "./token.service";

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  getDashboard() {
    let options = {
      headers: new HttpHeaders({'Authorization': this.tokenService.getToken()}),
       withCredentials: true
    };
    return this.http.get(this.API_URL+'dashboard-service/app/loadDataDashboard',options)
  }
}
