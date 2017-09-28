import {Route} from "@angular/router";
import {PostComponent} from "./post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {OpenPostComponent} from "./open-post/open-post.component";
import {GuardService} from "../common/guard-service";

export const PostRoutes: Route[] = [
  {
    path: 'post',
    component: PostComponent,
    children: [
      { path: 'new', component: EditPostComponent, canActivate: [GuardService] },
      { path: 'edit/:id', component: EditPostComponent, canActivate: [GuardService], },
      { path: 'open/:id', component: OpenPostComponent }
    ]
  }
];
