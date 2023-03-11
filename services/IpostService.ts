import { Post } from "../model/post-model";

export interface IpostAction  {
    
    // add(post: Post): Post;   //saving post
    // addPost(): void; //adding all posts  
    addFT(input): Post[];   //adding a new post
    getAll():Post[];
    clearCompleted(): void;
    getById(postId : number) : Post //geting id and returning a post id

}
