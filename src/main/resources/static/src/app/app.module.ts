import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {DashboardService} from "./dashboard/dashboard.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MenubarModule} from "primeng/primeng";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    MenubarModule,
    AngularFontAwesomeModule,

  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
