import { Comment } from "model/comment-model";

export interface IcommentAction {
    addComment(input,postId : number): Comment[] ;
}