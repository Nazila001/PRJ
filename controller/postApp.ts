import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";
// import PostListComponents from './postListComponents';
import { PostS } from '../services/postService';



export class PostApp {
    private postService: PostS;
    // private postList: PostListComponents;

    constructor() {
        document.getElementById('addPost').addEventListener("click",()=>{
            this.addPost()
        });
        document.getElementById('enterPost').addEventListener("click",()=>{
            this.addPost()
        });
        this.renderPosts()
        this.postService = new PostS()
        // this.postService = new PostS(posts);
    }


    addPost(){
        // let value1 = (document.querySelector("#enterPost")as any).value;
        // document.querySelector("#value1").innerHTML = value1;
        
        const post = (document.getElementById('innerPost') as any).value;
        document.getElementById("showEnterPost").innerHTML = post;
        this.postService.addPost()
        // this.postService.add(postAutherName);
        this.renderPosts();
    }

    clearCompleted(){
        this.postService.clearCompleted();
        this.renderPosts();
    }

    renderPosts(){

        const posts =['نام نویسنده:','متن پیام:'];
        const postElement = document.getElementById('allPosts');
        // let postsAll = this.postService.getAll() ;
        posts.forEach(post=>{
            const divTag = document.createElement('div');
            // divTag.innerText = post.autherName;
            
            const messageTag = document.createElement('p');
            messageTag.innerText = post;
            divTag.append(messageTag);
            postElement.append(divTag)
        })
        // this.postList.render(posts);
    }


    // intialize(post:Post[]) {  //It should be writed. this function will handel html main page -  It is related to ./conrtoller/postListComponents.ts which should completed
        
    // }   
}