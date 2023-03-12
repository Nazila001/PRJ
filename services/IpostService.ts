import { Post } from "../model/post-model";

export interface IpostAction  {
    
    addFT(input): Post[];   //adding a new post
    getAll():Post[];
    clearCompleted(postId : number): void;
    getById(postId : number) : Post //geting id and returning a post id

}
