import { Component, OnInit } from "@angular/core";
import {User} from "../../models/user";
import {Role} from "../../models/role";
import {UserService} from "../../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  user:User= new User();
  role:Role= new Role();
  roleCheck:Array<boolean> = [false,false];
  constructor(private userService: UserService) {}

  ngOnInit() {}

  saveUser(){
    if(this.roleCheck[0])
    this.role.role[0]="ADMIN"
    if(this.roleCheck[1])
    this.role.role[0]="USER"
    this.role.userName=this.user.userName;
    this.role.creationDate=new Date();
    this.role.firstName=this.user.firstName;
    this.role.lastName=this.user.lastName;

    this.user.roleUser=this.role;

    console.log(this.user)

    this.userService.addUser(this.user).subscribe(data => {

    }, error => {

    })
  }
}
