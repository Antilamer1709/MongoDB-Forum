import { Component, OnInit } from '@angular/core';
import {CommonComponent} from "../common/common-component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends CommonComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
