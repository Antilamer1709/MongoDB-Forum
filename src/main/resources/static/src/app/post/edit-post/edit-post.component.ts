import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent extends CommonComponent implements OnInit {

  public isNewPost: boolean;
  public postId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.initTouteParams();
  }

  private initTouteParams(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.isNewPost = !this.postId;
    });
  }

}
