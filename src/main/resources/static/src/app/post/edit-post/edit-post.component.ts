import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {ActivatedRoute, Params} from "@angular/router";
import {environment} from "../../../environments/environment";
import {PostModel} from "../post-model";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent extends CommonComponent implements OnInit {

  public isNewPost: boolean;
  public postId: number;
  public invalidFileSizeMessageSummary: string = 'Wrong size of the file!';
  public invalidFileSizeMessageDetail: string = 'Max size is 4mb.';
  public invalidFileTypeMessageSummary: string = 'Wrong type of the file!';
  public invalidFileTypeMessageDetail: string = 'File should be an image!';
  public maxFileSize: number = 4000000; //4mb
  public url: string = environment.baseUrl + '/file/uploadPostImage';
  public postModel: PostModel;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.initRouteParams();
    this.postModel = new PostModel();
  }

  private initRouteParams(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.isNewPost = !this.postId;
    });
  }

  public onError($event): void {
    this.handleException($event);
  }

  public onUpload($event): void {
    this.postModel.imageName = $event.xhr.response;
  }

  public submit(): void {

  }

}
