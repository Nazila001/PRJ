import { Post } from "model/post-model";

export interface IpostAction  {
    
    add(post: Post): Post;   //saving post
    add(post: string): Post;  //adding a new post
    addAll():Post[];  //adding all posts
    deletePost(): void;
    getById(postId : number) : Post //geting id and returning a post id
}