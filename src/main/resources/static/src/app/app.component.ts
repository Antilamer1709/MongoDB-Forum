import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "./common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent implements OnInit  {

  public loggedUser: boolean = false;
  public msgs: Message[] = [];

  constructor(messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
    this.messageService.messageObserver.subscribe(message => {
      this.msgs.push(message);
    });
  }

}
