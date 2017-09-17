import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent extends CommonComponent implements OnInit {

  constructor(messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
  }

}
