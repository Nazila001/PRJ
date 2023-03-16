import { Comment } from 'model/comment-model';
import { IcommentAction } from './IcommentService';
export declare class Comments implements IcommentAction {
    comments: Comment[];
    constructor(comments?: Comment[]);
    private find;
    addComment(input: any, postId: number): Comment[];
    getComment(postId: number): Comment[];
}
