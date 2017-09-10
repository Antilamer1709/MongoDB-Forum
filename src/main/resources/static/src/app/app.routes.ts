import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardRoutes} from "./dashboard/dashboard.routes";
import {AuthenticationRoutes} from "./authentication/authentication.routes";
import {PostRoutes} from "./post/post.routes";

export const routes: Routes = [

  ...DashboardRoutes,
  ...AuthenticationRoutes,
  ...PostRoutes,

  { path: '**',
    redirectTo: '/dashboard'
  }

];
