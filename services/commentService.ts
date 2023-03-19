import { Comment } from 'model/comment-model';
import { IcommentAction } from './IcommentService';


function clone<T> (src:T) :T {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
}

export class Comments implements IcommentAction {
    
    constructor 
        (public comments : Comment[] = [])
        {}

        private find(postId:number):Comment {

            var filtered = this.comments.filter(c => c.id == postId);
            if (filtered.length){
                return filtered[0];
            }
            return null;
        }


    addComment(input,postId : number): Comment[] {

        let  comment : Comment = {
            id : postId,
            autherName: localStorage.getItem("redirect"),
            message: input,
        };

        this.comments.push(comment);
        localStorage.setItem('comments',JSON.stringify(this.comments));
        return this.comments;
    }


    getComment(postId:number): Comment[] {
        this.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) :[];
        return this.comments.filter(value => value.id == postId);
        // return this.comments;
    }
}




