import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/primeng";
import {ButtonModule} from "primeng/components/button/button";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
