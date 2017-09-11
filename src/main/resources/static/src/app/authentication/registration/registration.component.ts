import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from "../authentication-model";
import {RegistrationService} from "./registration.service";
import {CommonComponent} from "../../common/common-component";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends CommonComponent implements OnInit {

  public registration: RegistrationModel;

  constructor(private service: RegistrationService,
              private router: Router) {
    super();
  }

  ngOnInit() {
    this.registration = new RegistrationModel();
  }

  public register(form: FormGroup): void {
    if (form.valid && this.registration.password === this.registration.confirmPassword) {
      this.service.register(this.registration).subscribe(
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
