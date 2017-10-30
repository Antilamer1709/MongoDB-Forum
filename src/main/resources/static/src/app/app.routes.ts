import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardRoutes} from "./dashboard/dashboard.routes";
import {AuthenticationRoutes} from "./authentication/authentication.routes";
import {PostRoutes} from "./post/post.routes";
import {ProfileRoutes} from "./profile/profile.routes";

export const routes: Routes = [

  ...DashboardRoutes,
  ...AuthenticationRoutes,
  ...PostRoutes,
  ...ProfileRoutes,

  { path: '**',
    redirectTo: '/dashboard'
  }

];
