import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "./components/components.module";
import {RouterModule} from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './login/login.component';
import {TokenService} from "./services/token.service";

@NgModule({
  declarations: [
    AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
