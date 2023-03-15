import { Comment } from 'model/comment-model';
import { IcommentAction } from './IcommentService';




export class Comments implements IcommentAction {
    
    constructor 
        (public comments : Comment[] = [])
        {}

        private find(comment:number):Comment {

            var filtered = this.comments.filter(x => x.id == comment);
            if (filtered.length){
                return filtered[0];
            }
            return null;
        }



    addComment(input,postId : number): Comment[] {

        let  comment : Comment = {
            autherName: localStorage.getItem("redirect"),
            message: input,
        };

        this.comments.push(comment);
        localStorage.setItem('comments',JSON.stringify(this.comments));
        return this.comments;

    }


    getAll(): Comment[] {
        this.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) :[];
        return this.comments;

    }
}