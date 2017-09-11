import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../common/common-component";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
