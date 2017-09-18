import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CommonService} from "../common/common.service";
import {UserModel} from "../app-model";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService extends CommonService {

  public loggedUser: UserModel;

  constructor(private http: Http, router: Router) {
    super(router)
  }

  logout(): Observable<any> {
    return this.http.get(environment.baseUrl + '/logout', {headers: this.getHeaders()})
      .catch((err) => this.handleError(err));
  }

}
