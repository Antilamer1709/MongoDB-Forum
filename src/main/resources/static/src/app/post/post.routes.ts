import {Route} from "@angular/router";
import {PostComponent} from "./post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {OpenPostComponent} from "./open-post/open-post.component";

export const PostRoutes: Route[] = [
  {
    path: 'post',
    component: PostComponent,
    children: [
      { path: 'new', component: EditPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
      { path: ':id', component: OpenPostComponent }
    ]
  }
];
