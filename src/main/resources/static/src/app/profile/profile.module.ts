import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileService} from "./profile.service";
import {DataScrollerModule, TabViewModule} from 'primeng/primeng';
import {UsersPostsComponent} from './users-posts/users-posts.component';
import {UsersCommentsComponent} from './users-comments/users-comments.component';
import {UsersProfileComponent} from './users-profile/users-profile.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    DataScrollerModule,
    RouterModule
  ],
  declarations: [ProfileComponent, UsersPostsComponent, UsersCommentsComponent, UsersProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule {
}
