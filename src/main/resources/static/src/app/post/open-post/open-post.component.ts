import {Component, OnInit} from '@angular/core';
import {PostModel} from "../post-model";
import {CommonComponent} from "../../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {OpenPostService} from "./open-post.service";
import {ActivatedRoute, Params} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Constants} from "../../common/constants";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-open-post',
  templateUrl: './open-post.component.html',
  styleUrls: ['./open-post.component.css']
})
export class OpenPostComponent extends CommonComponent implements OnInit {

  public post: PostModel;
  public postId: string;
  public imageUrl: string = environment.baseUrl + Constants.IMAGE_DOWNLOAD_URL;

  constructor(messageService: MessageService,
              private openPostService: OpenPostService,
              private activatedRoute: ActivatedRoute) {
    super(messageService);
  }

  ngOnInit() {
    this.initPostId();
    this.initPost();
  }

  private initPostId(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId = params['id'];
    });
  }

  private initPost(): void {
    this.openPostService.getPost(this.postId).subscribe(
      data => {
        this.post = data;
      },
      error => {
        this.handleException(error);
      }
    );
  }

  public addComment(form: FormGroup): void {
    if (form.valid){
      this.openPostService.addComment(this.post).subscribe(
        data => {
          this.messageService.add({severity:'info', summary:'Post', detail:'Comment was added!'});
          this.post.newComment = null;
        },
        error => {
          this.handleException(error);
        }
      );
    }
  }

}
