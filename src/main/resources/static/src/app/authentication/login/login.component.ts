import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {LoginModel} from "../authentication-model";
import {FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends CommonComponent implements OnInit {

  public loginModel: LoginModel;

  constructor(private service: LoginService) {
    super();
  }

  ngOnInit() {
    this.loginModel = new LoginModel();
  }

  public login(form: FormGroup): void {
    if (form.valid) {
      this.service.authenticate(this.loginModel).subscribe(
        data => {
          console.log("succes!");
          console.log(data);
        },
        error => {
          this.handleException(error);
        }
      );
    } else {
      this.handleFormErrors(form);
    }
  }

}
