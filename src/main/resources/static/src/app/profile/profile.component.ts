import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends CommonComponent implements OnInit {

  public username: string;

  constructor(messageService: MessageService,
              private activatedRoute: ActivatedRoute) {
    super(messageService);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.username = params['username'];
    });
  }

}
