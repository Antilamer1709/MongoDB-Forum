import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../../common/common-component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
