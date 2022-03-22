import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {first} from "rxjs";
import {User} from "../models/user";
import {TokenService} from "../services/token.service";
import {DashboardService} from "../services/dashboard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  image = "../../../assets/img/login.jpg";
  response:any;
  username:any;
  password:any;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private tokenService : TokenService) {
  }
  login(){
    this.authenticationService.login(this.username, this.password).subscribe(data => {
      this.response = data;
      this.tokenService.setToken(this.response.token)
      this.router.navigate(['home']);
    }, error => {

    })
  }

  ngOnInit(): void {

  }
}
