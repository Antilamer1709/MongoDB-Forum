import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {PostModel} from "../post-model";
import {Constants} from "../../common/constants";
import {FormGroup} from "@angular/forms";
import {EditPostService} from "./edit-post.service";
import {MessageService} from "primeng/components/common/messageservice";
import {ConfirmationService} from "primeng/primeng";

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
  public imageUrl: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: EditPostService,
              messageService: MessageService,
              private router: Router,
              private confirmationService: ConfirmationService) {
    super(messageService);
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
    console.log($event);
    this.postModel.imageId = $event.xhr.response;
    this.getPostImage(this.postModel.imageId);
  }

  private getPostImage(imageId:string): void {
    this.imageUrl = environment.baseUrl + Constants.IMAGE_DOWNLOAD_URL + imageId;
  }

  private submit(form: FormGroup): void {
    if (form.valid) {
      this.service.savePost(this.postModel).subscribe(
        () => {
          this.messageService.add({severity:'info', summary:'Post', detail:'Post was saved!'});
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.handleException(error);
        }
      );
    } else {
      this.handleFormErrors(form);
    }
  }

  public confirmAddingPost(form: FormGroup): void {
    if (this.postModel.imageId) {
      this.submit(form);
    } else {
      this.confirmationService.confirm({
        message: 'You have added an image but not uploaded it. Do you want to add post without it?',
        accept: () => {
          this.submit(form);
        }
      });
    }
  }

}
