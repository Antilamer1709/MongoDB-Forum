import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-users-comments',
  templateUrl: './users-comments.component.html',
  styleUrls: ['./users-comments.component.css']
})
export class UsersCommentsComponent extends CommonComponent implements OnInit {

  constructor(messageService: MessageService,
              private profileService: ProfileService) {
    super(messageService);
  }

  ngOnInit() {
  }

}
