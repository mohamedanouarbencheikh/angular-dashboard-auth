import {Role} from "./role";

export class User {
  company: string ="";
  userName: string ="";
  email: string ="";
  firstName: string ="";
  lastName: string ="";
  address: string ="";
  city: string ="";
  postalCode: number =0;
  country: string ="";
  aboutMe: string ="";
  password: string ="";
  creationDate: Date = new Date();
  roleUser: Role = new Role();
}
