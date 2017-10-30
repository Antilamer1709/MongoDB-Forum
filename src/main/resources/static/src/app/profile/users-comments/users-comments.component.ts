import {Component, Input, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {ProfileService} from "../profile.service";
import {CommentModel} from "../../post/post-model";

@Component({
  selector: 'app-users-comments',
  templateUrl: './users-comments.component.html',
  styleUrls: ['./users-comments.component.css']
})
export class UsersCommentsComponent extends CommonComponent implements OnInit {

  @Input() username: string;
  public commentModel: CommentModel[];

  constructor(messageService: MessageService,
              private profileService: ProfileService) {
    super(messageService);
  }

  ngOnInit() {
    this.commentModel = [];
  }

  public loadData($event): void {
    this.profileService.getUsersComments(this.username, $event.rows, $event.first).subscribe(
      data => {
        this.commentModel = this.commentModel.concat(data);
      },
      error => {
        this.handleException(error);
      }
    );
  }

}
