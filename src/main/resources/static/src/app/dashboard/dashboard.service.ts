import { Injectable } from '@angular/core';
import {CommonService} from "../common/common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Hello} from "./dashboard-model";

@Injectable()
export class DashboardService extends CommonService {

  constructor(private http: Http, router: Router) {
    super(router)
  }

  getHello(): Observable<Hello> {
    return this.http.get(environment.baseUrl + '/hello', { headers: this.getHeaders() } )
      .map( this.extractData )
      .catch(( err ) => this.handleError( err ) );
  }

}
