import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPostComponent} from './edit-post/edit-post.component';
import {OpenPostComponent} from './open-post/open-post.component';
import {PostComponent} from './post.component';
import {RouterModule} from "@angular/router";
import {ConfirmationService, ConfirmDialogModule, EditorModule, FileUploadModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {EditPostService} from "./edit-post/edit-post.service";
import {OpenPostService} from "./open-post/open-post.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FileUploadModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    EditorModule
  ],
  declarations: [
    EditPostComponent,
    OpenPostComponent,
    PostComponent
  ],
  providers: [
    EditPostService,
    OpenPostService,
    ConfirmationService
  ]
})
export class PostModule {
}
