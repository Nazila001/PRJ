import { Post } from "../model/post-model";

export interface IpostAction  {
    
    // add(post: Post): Post;   //saving post
    addPost(post: string): Post;  //adding a new post
    addFT(input): Post[];  //adding all posts
    getAll():Post[];
    update();
    clearCompleted(): void;
    getById(postId : number) : Post //geting id and returning a post id

}
