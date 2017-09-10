import {Route} from "@angular/router";
import {AuthenticationComponent} from "./authentication.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

export const AuthenticationRoutes: Route[] = [
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
];
