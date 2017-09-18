import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "./common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";
import {AuthenticationService} from "./authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent implements OnInit  {

  public msgs: Message[] = [];

  constructor(messageService: MessageService,
              public authenticationService: AuthenticationService) {
    super(messageService);
  }

  ngOnInit() {
    this.messageService.messageObserver.subscribe(message => {
      this.msgs.push(message);
    });
  }

  public logout(): void {
    this.authenticationService.logout().subscribe(
      () => {
        this.authenticationService.loggedUser = null;
        this.messageService.add({severity:'info', summary:'Hello', detail:'You are logged out!'});
      },
      error => {
        this.handleException(error);
      }
    );
  }

}
