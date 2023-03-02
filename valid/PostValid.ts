import { Post } from "model/post-model";

export class PostValidation {


    auther : string;
    message : string;


    constructor(post:Post) {
        this.auther = post.auther;
        this.message = post.message;
    }

    private autherValid (auther:string) {
        if (auther != undefined && auther.length>=4)
            return true
        else return false 
    }

    private messageValid (message : string) {
        if (message != undefined && message.length>=4)
            return true
        else return false 
    }

    validPostE(): boolean {
        return (this.autherValid(this.auther) && this.messageValid(this.message));
    }
}