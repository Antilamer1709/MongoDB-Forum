import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";
import {Location} from '@angular/common';

@Injectable()
export class GuardService implements CanActivate {

  constructor(protected authenticationService: AuthenticationService,
              protected router: Router,
              private _location: Location) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
    return this.authenticationService.getLoggedUser().map(
      res => {
        if (!res) {
          this.router.navigate(['/authentication/login']);
          return false;
        }
        return true;
      },
      error => {
        this.router.navigate(['/authentication/login']);
        return false;
      }
    );
  }

}
