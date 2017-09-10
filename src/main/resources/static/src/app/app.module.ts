import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ButtonModule, MenubarModule} from "primeng/primeng";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthenticationModule} from "./authentication/authentication.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    MenubarModule,
    AngularFontAwesomeModule,
    DashboardModule,
    AuthenticationModule,
    ButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
