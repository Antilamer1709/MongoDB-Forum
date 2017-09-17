import { Injectable } from '@angular/core';
import {CommonService} from "../../common/common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PostModel} from "../post-model";
import {environment} from "../../../environments/environment";

@Injectable()
export class EditPostService extends CommonService{

  constructor(private http: Http, router: Router) {
    super(router)
  }

  savePost(postModel: PostModel): Observable<any> {
    return this.http.post(environment.baseUrl + '/post/save', postModel, {headers: this.getHeaders()})
      .catch((err) => this.handleError(err));
  }

}
