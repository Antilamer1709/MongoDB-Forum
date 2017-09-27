import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {CommonComponent} from "../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {PostModel} from "../post/post-model";
import {environment} from "../../environments/environment";
import {Constants} from "../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends CommonComponent implements OnInit {

  public posts: PostModel[];
  public imageUrl: string = environment.baseUrl + Constants.IMAGE_DOWNLOAD_URL;

  constructor(private dashboardService: DashboardService,
              private router: Router,
              messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
    this.posts = [];
  }

  public loadData($event): void {
    console.log($event);

    this.dashboardService.getPosts($event.rows, $event.first).subscribe(
      data => {
        this.posts = this.posts.concat(data);
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
