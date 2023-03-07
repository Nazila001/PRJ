import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";
// import PostListComponents from './postListComponents';
import { PostS } from '../services/postService';



export class PostApp {
    private postService: PostS;
    // private postList: PostListComponents;

    constructor() {
        this.postService = new PostS()
        document.getElementById('addPost').addEventListener("click",()=>{
            this.addFT()
        });
        document.getElementById('enterPost').addEventListener("click",()=>{
            this.addPost()
        });
        this.renderPosts()
        // this.postService = new PostS(posts);
    }


    addFT() {
        const post = (document.getElementById('postMessage') as any).value;
        document.getElementById("showPostFirsttime").innerHTML = post;
        this.postService.addFT(post)
        this.renderPosts();
    }

    addPost(){
        
        const post = (document.getElementById('innerPost') as any).value;
        document.getElementById("showEnterPost").innerHTML = post;
        this.postService.addPost()
    }

    clearCompleted(){
        this.postService.clearCompleted();
        this.renderPosts();
    }

    renderPosts(){

        // const posts =['نام نویسنده:','متن پیام:'];
        // const posts = ['متن پیام:'] 
        const postElement = document.getElementById('allPosts');
        const posts= this.postService.getAll()
        posts.forEach(post=>{

            const divTag = document.createElement('div');
            const messageTag = document.createElement('p'); 
            const userTag = document.createElement('p'); 



            // userTag.innerText = post.message;
            userTag.innerText = localStorage.getItem("redirect");
            divTag.appendChild(messageTag);

            // messageTag.innerText = post.message;
            messageTag.innerText = localStorage.getItem("redirect");
            divTag.appendChild(messageTag);

            postElement.append(divTag);
            divTag.append(messageTag);
            divTag.append(userTag);

            

            
        })
    }
}

