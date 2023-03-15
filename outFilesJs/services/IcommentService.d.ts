import { Comment } from "model/comment-model";
export interface IcommentAction {
    addComment(input: any, postId: number): Comment[];
}
