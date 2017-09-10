import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {PostModule} from "../post/post.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
