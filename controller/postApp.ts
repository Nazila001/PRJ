import { Post,PostState } from "model/post-model";
import { IpostAction } from "services/IpostService";
import PostListComponents from './postListComponents';
import { PostS } from '../services/postService';



export class PostApp {
    private postService: PostS;
    private postList: PostListComponents;

    constructor(po,posts){
        this.postService = new PostS([])
        // this.postService = new PostS(posts);
    }


    addPost(postAutherName){
        this.postService.add(postAutherName);
        this.rernderPosts();
    }

    clearCompleted(){
        this.postService.clearCompleted();
        this.rernderPosts();
    }

    rernderPosts(){
        let posts = this.postService.getAll() ;
        this.postList.render(posts);
    }


    intialize(post:Post[]) {  //It should be writed. this function will handel html main page -  It is related to ./conrtoller/postListComponents.ts which should completed
        
    }   
}