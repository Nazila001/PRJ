import { Post, PostState } from '../model/post-model';
import { Icomment } from './IcomemtService';


export class Comments implements Icomment {
    
    constructor 
        (private lastId = 0,
        public comments : Comment[] = [],
        )
        {}




addComment(input,postId): Comment[] {

    let  comment : Post = {
        autherName: localStorage.getItem("redirect"),
        message: input,
    };

    this.comments.push();
    localStorage.setItem('comments',JSON.stringify(this.comments));
    return this.comments;

    }
}