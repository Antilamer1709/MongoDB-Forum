import {UserModel} from "../app-model";

export class PostModel {
  id: string;
  header: string;
  content: string;
  imageId: string;
  newComment: string;
  creator: UserModel;
  comments: CommentModel[];
  createdDate: Date;
  modifiedDate: Date;
}

export class CommentModel {
 id: string;
 text: string;
 user: UserModel;
 creationDate: Date
}
