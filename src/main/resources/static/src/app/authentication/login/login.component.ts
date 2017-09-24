import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {LoginModel} from "../authentication-model";
import {FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {MessageService} from "primeng/components/common/messageservice";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends CommonComponent implements OnInit {

  public loginModel: LoginModel;
  private returnUrl: string;

  constructor(private service: LoginService,
              messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) {
    super(messageService);
  }

  ngOnInit() {
    this.loginModel = new LoginModel();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  public login(form: FormGroup): void {
    if (form.valid) {
      this.service.authenticate(this.loginModel).subscribe(
        () => {
          this.messageService.add({severity:'info', summary:'Hello', detail:'You are logged in!'});
          this.router.navigate([this.returnUrl]);
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
