import {Injectable} from '@angular/core';
import {CommonService} from "../common/common.service";
import {Http, URLSearchParams} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {CommentModel, PostModel} from "../post/post-model";
import {UserModel} from "../app-model";

@Injectable()
export class ProfileService extends CommonService {

  constructor(private http: Http, router: Router) {
    super(router)
  }

  getUsersPosts(username: string, limit: string, offset: string): Observable<PostModel[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', limit);
    params.set('offset', offset);

    return this.http.get(environment.baseUrl + '/profile/posts/' + username,
      {
        headers: this.getHeaders(),
        search: params
      })
      .map(this.extractData)
      .catch((err) => this.handleError(err));
  }

  getUsersComments(username: string, limit: string, offset: string): Observable<CommentModel[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', limit);
    params.set('offset', offset);

    return this.http.get(environment.baseUrl + '/profile/comments/' + username,
      {
        headers: this.getHeaders(),
        search: params
      })
      .map(this.extractData)
      .catch((err) => this.handleError(err));
  }

  getUsersProfile(username: string): Observable<UserModel> {
    return this.http.get(environment.baseUrl + '/profile/profile/' + username, {headers: this.getHeaders()})
      .map(this.extractData)
      .catch((err) => this.handleError(err));
  }

}
