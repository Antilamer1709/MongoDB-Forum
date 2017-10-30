import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent extends CommonComponent implements OnInit {

  constructor(messageService: MessageService,
              private profileService: ProfileService) {
    super(messageService);
  }

  ngOnInit() {
  }

}
