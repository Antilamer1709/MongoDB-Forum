import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LoginModel} from "../authentication-model";
import {environment} from "../../../environments/environment";
import {CommonService} from "../../common/common.service";
import {Http, Response} from "@angular/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Injectable()
export class LoginService extends CommonService {

  constructor(private http: Http, router: Router,
              private authenticationService: AuthenticationService) {
    super(router)
  }

  authenticate(login: LoginModel): Observable<any> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', login.username);
    urlSearchParams.append('password', login.password);
    urlSearchParams.append('rememberme', login.rememberMe? "true" : "false");
    let body = urlSearchParams.toString();

    return this.http.post(environment.baseUrl + '/authenticate', body, {headers: this.getEncodedHeaders()})
      .map((res: Response) => {
        this.authenticationService.loggedUser = res.json();
        return this.authenticationService.loggedUser;
      });
  }

}
