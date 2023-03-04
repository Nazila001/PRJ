import { Post } from "../model/post-model";

export interface IpostAction  {
    
    add(post: Post): Post;   //saving post
    add(post: string): Post;  //adding a new post
    add(input): Post[];  //adding all posts
    getAll():Post[];
    clearCompleted(): void;
    getById(postId : number) : Post //geting id and returning a post id
}
