import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "./common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent implements OnInit  {

  public msgs: Message[] = [];

  constructor(messageService: MessageService,
              public authenticationService: AuthenticationService,
              private router: Router) {
    super(messageService);
  }

  ngOnInit() {
    this.initLoggedUser();
    this.initMessageObserver();
  }

  public logout(): void {
    this.authenticationService.logout().subscribe(
      () => {
        this.authenticationService.loggedUser = null;
        this.messageService.add({severity:'info', summary:'Hello', detail:'You are logged out!'});
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.handleException(error);
      }
    );
  }

  private initLoggedUser(): void {
    this.authenticationService.getLoggedUser().subscribe(
      res => {
        console.log("loggedUser: ");
        console.log(res);
      },
      error => {
        this.handleException(error);
      }
    );
  }

  private initMessageObserver(): void {
    this.messageService.messageObserver.subscribe(message => {
      this.msgs.push(message);
    });
  }

}
