import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPostComponent} from './edit-post/edit-post.component';
import {OpenPostComponent} from './open-post/open-post.component';
import {PostComponent} from './post.component';
import {RouterModule} from "@angular/router";
import {FileUploadModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {EditPostService} from "./edit-post/edit-post.service";
import {OpenPostService} from "./open-post/open-post.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FileUploadModule,
    FormsModule
  ],
  declarations: [
    EditPostComponent,
    OpenPostComponent,
    PostComponent
  ],
  providers: [
    EditPostService,
    OpenPostService
  ]
})
export class PostModule {
}
