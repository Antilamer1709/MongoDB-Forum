import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from "../authentication-model";
import {RegistrationService} from "./registration.service";
import {CommonComponent} from "../../common/common-component";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends CommonComponent implements OnInit {

  public registration: RegistrationModel;

  constructor(private service: RegistrationService,
              private router: Router,
              messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
    this.registration = new RegistrationModel();
  }

  public register(form: FormGroup): void {
    if (form.valid && this.registration.password === this.registration.confirmPassword) {
      this.service.register(this.registration).subscribe(
        () => {
          this.messageService.add({severity:'info', summary:'Registration', detail:'You can log in now!'});
          this.router.navigate(['/authentication/login']);
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
