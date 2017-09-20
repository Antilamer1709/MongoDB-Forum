import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
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

  getLoggedUser(): Observable<UserModel> {
    if (this.loggedUser) {
      return Observable.of(this.loggedUser);
    } else {
      return this.http.post(environment.baseUrl + '/authentication/loggedUser', {headers: this.getEncodedHeaders()})
        .map((res: Response) => {
          this.loggedUser = this.extractLoggedUser(res);
          return this.loggedUser;
        });
    }
  }

}
