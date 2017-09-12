import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CommonService} from "../common/common.service";

@Injectable()
export class AuthenticationService extends CommonService {

  public loggedUser: any;

  constructor(private http: Http, router: Router) {
    super(router)
  }

}
