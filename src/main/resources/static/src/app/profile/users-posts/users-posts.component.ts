import {Component, Input, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {ProfileService} from "../profile.service";
import {MessageService} from "primeng/components/common/messageservice";
import {PostModel} from "../../post/post-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent extends CommonComponent implements OnInit {

  @Input() username: string;
  public userPosts: PostModel[];

  constructor(messageService: MessageService,
              private router: Router,
              private profileService: ProfileService) {
    super(messageService);
  }

  ngOnInit() {
    this.userPosts = [];
  }

  public loadData($event): void {
    this.profileService.getUsersPosts(this.username, $event.rows, $event.first).subscribe(
      data => {
        this.userPosts = this.userPosts.concat(data);
      },
      error => {
        this.handleException(error);
      }
    );
  }

  public openPost(id: string): void {
    this.router.navigate(['/post/open/' + id]);
  }

}
