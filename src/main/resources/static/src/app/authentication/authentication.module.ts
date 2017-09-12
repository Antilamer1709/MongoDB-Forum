import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/primeng";
import {ButtonModule} from "primeng/components/button/button";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {FormsModule} from "@angular/forms";
import {RegistrationService} from "./registration/registration.service";
import {LoginService} from "./login/login.service";
import {AuthenticationService} from "./authentication.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  providers: [
    RegistrationService,
    LoginService,
    AuthenticationService
  ]
})
export class AuthenticationModule { }
