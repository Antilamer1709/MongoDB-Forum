import {Route} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {PostRoutes} from "./post/post.routes";

export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      ...PostRoutes,
    ]
  }
];
