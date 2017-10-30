import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {PostModule} from "../post/post.module";
import {RouterModule} from "@angular/router";
import {DataScrollerModule} from "primeng/primeng";
import {ProfileModule} from "../profile/profile.module";

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    ProfileModule,
    RouterModule,
    DataScrollerModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
