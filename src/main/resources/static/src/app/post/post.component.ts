import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends CommonComponent implements OnInit {

  constructor(messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
  }

}
