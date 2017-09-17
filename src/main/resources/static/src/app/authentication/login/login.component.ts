import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {LoginModel} from "../authentication-model";
import {FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {MessageService} from "primeng/components/common/messageservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends CommonComponent implements OnInit {

  public loginModel: LoginModel;

  constructor(private service: LoginService,
              messageService: MessageService,
              private router: Router) {
    super(messageService);
  }

  ngOnInit() {
    this.loginModel = new LoginModel();
  }

  public login(form: FormGroup): void {
    if (form.valid) {
      this.service.authenticate(this.loginModel).subscribe(
        () => {
          this.messageService.add({severity:'info', summary:'Hello', detail:'You are logged in!'});
          this.router.navigate(['/dashboard']);
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
