import { Injectable } from '@angular/core';
import {CommonService} from "../../common/common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PostModel} from "../post-model";
import {environment} from "../../../environments/environment";

@Injectable()
export class OpenPostService extends CommonService {

  constructor(private http: Http, router: Router) {
    super(router)
  }

  getPost(id: string): Observable<PostModel> {
    return this.http.get(environment.baseUrl + '/post/' + id,{headers: this.getHeaders()})
      .map(this.extractData)
      .catch((err) => this.handleError(err));
  }

  addComment(postModel: PostModel): Observable<any> {
    return this.http.post(environment.baseUrl + '/post/addComment', postModel, {headers: this.getHeaders()})
      .catch((err) => this.handleError(err));
  }

}
