import { Injectable } from '@angular/core';
import {CommonService} from "../../common/common.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class EditPostService extends CommonService{

  constructor(private http: Http, router: Router) {
    super(router)
  }

}
