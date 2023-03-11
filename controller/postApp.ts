import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";
// import PostListComponents from './postListComponents';
import { PostS } from '../services/postService';



export class PostApp {
    private postService: PostS;
    // private postList: PostListComponents;
    public listPosts = [];  //a list to add posts of users

    constructor() {
        this.postService = new PostS()
        document.getElementById('addPost').addEventListener("click",()=>{
            this.addFT()
        });
        // document.getElementById('enterPost').addEventListener("click",()=>{
        //     this.addPost()
        // });
        this.renderPosts()
        // this.postService = new PostS(posts);

    }

    


    addFT() {
        const post = (document.getElementById('postMessage') as any).value;
        // document.getElementById("showPostFirsttime").innerHTML = post;
        // localStorage.setItem('postsOfUsers', JSON.stringify(post));
        this.postService.addFT(post);
        this.renderPosts();
    }

    // addPost(){
        
    //     const post = (document.getElementById('innerPost') as any).value;
    //     document.getElementById("showEnterPost").innerHTML = post;
    //     localStorage.setItem('postsOfUsers', JSON.stringify(post));
    //     this.postService.addPost();
    //     this.renderPosts();
    // }

    clearCompleted(){
        this.postService.clearCompleted();
        this.renderPosts();
    }

    renderPosts(){

        // const posts =['نام نویسنده:','متن پیام:'];
        // const posts = ['متن پیام:'] 
        const postElement = document.getElementById('allPosts');
        // const posts = JSON.parse(localStorage.getItem('postsOfUsers'));
        const posts= this.postService.getAll();

        if(document.getElementById('items')) {
            postElement.removeChild(document.getElementById('items'));
        }

        const postitems = document.createElement('div');
        postitems.setAttribute('id','items');
        
        posts.forEach(post=>{
            
            const divTag = document.createElement('div');
            // divTag.className='items';
            const messageTag = document.createElement('p'); 
            const userTag = document.createElement('p'); 

            // userTag.innerText = post.message;
            userTag.innerText = localStorage.getItem('redirect');
            userTag.className= 'users';
            divTag.appendChild(userTag);

            // messageTag.innerText = post.message;
            messageTag.innerText = post.message  //putting this comment : post.message
            messageTag.className= 'messages';
            
            divTag.appendChild(messageTag);

            postitems.append(divTag);
            divTag.append(messageTag);
            // divTag.append(userTag);

        });
        postElement.append(postitems);
    }
}

