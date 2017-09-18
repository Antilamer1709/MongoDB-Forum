import {Injectable} from '@angular/core';
import {CommonService} from "../../common/common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {RegistrationModel} from "../authentication-model";

@Injectable()
export class RegistrationService extends CommonService {

  constructor(private http: Http, router: Router) {
    super(router)
  }

  register(registration: RegistrationModel): Observable<any> {
    return this.http.post(environment.baseUrl + '/authentication/registration', registration, {headers: this.getHeaders()})
      .catch((err) => this.handleError(err));
  }

}
