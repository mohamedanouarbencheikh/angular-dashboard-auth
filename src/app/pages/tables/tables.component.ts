import { Component, OnInit } from "@angular/core";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  users:Array<User> = new Array<User>();
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = <Array<User>>data;
    }, error => {

    })
  }
}
