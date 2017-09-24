import {Injectable} from '@angular/core';
import {CommonService} from "../common/common.service";
import {Http, URLSearchParams} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {PostModel} from "../post/post-model";

@Injectable()
export class DashboardService extends CommonService {

  constructor(private http: Http, router: Router) {
    super(router)
  }

  getPosts(limit: string, offset: string): Observable<PostModel[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', limit);
    params.set('offset', offset);

    return this.http.get(environment.baseUrl + '/dashboard/getPosts',
      {
        headers: this.getHeaders(),
        search: params
      })
      .map(this.extractData)
      .catch((err) => this.handleError(err));
  }

}
