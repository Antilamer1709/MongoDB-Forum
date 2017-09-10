import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPostComponent} from './edit-post/edit-post.component';
import {OpenPostComponent} from './open-post/open-post.component';
import {PostComponent} from './post.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EditPostComponent,
    OpenPostComponent,
    PostComponent
  ]
})
export class PostModule {
}
