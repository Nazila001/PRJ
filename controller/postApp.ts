import { PostS } from '../services/postService';
import { Comments } from 'services/commentService';


export class PostApp {
    private postService: PostS;
    private commentService: Comments;
    public listPosts = [];  //a list to add posts of users

    constructor() {
        this.postService = new PostS()
        this.commentService = new Comments()
        document.getElementById('addPost').addEventListener("click",()=>{
            this.addFT()
        });
        this.renderPosts()
    }


    addFT() {
        const post = (document.getElementById('postMessage') as any).value; 
        this.postService.addFT(post);
        this.renderPosts();
    }


    clearCompleted(postId){
        this.postService.clearCompleted(postId);  
        this.renderPosts();
    }

    likePost(PostState: number,postId: number): void {
        this.postService.likePost(PostState, postId);  
        this.renderPosts();
    }

    addComment(input,postId){
        this.commentService.addComment(input,postId);
        this.renderComment(postId);
    }

    renderPosts(){
 
        const postElement = document.getElementById('main-items');
        const posts= this.postService.getAll();
        const main = document.getElementById('items')
        if(main) {
            postElement.removeChild(main);
        }

        const postitems = document.createElement('div');
        postitems.setAttribute('id','items');
        
        posts.forEach(post=>{


            const cardMain = document.createElement('div'); //<div class="card shadow-sm">
            cardMain.className = 'card shadow-sm';
            
             
            const cardBody = document.createElement('div');  //<div class="card-body" id="tocken">
            cardBody.className = 'card-body';
            cardMain.appendChild(cardBody);


            const cardText = document.createElement('p');  //<p class="card-text" id="p1">
            cardText.className = 'card-text';
            cardBody.appendChild(cardText);


            const cardBody1 = document.createElement('div');  // <div id="allPosts">
            cardBody1.className = 'card-body1';
            cardBody1.innerText = localStorage.getItem('redirect');
            cardText.appendChild(cardBody1);


            const messageTag = document.createElement('p');  //<p id="showPostFirsttime">
            messageTag.className = 'card-text1';
            messageTag.innerText = post.message; 
            cardBody1.appendChild(messageTag);

            

            const cardBody2 = document.createElement('div');  // <div class='small-font text-center top-20'>
            cardBody2.className = 'small-font text-center top-20';
            messageTag.appendChild(cardBody2);



            const cardText1 = document.createElement('div');  //<div class='red-bg'>
            cardText1.className = 'card-body';
            messageTag.appendChild(cardText1);

            
            const btn = document.createElement('button'); //<button onclick="deletePost()" class="btn py-0 px-1 btn-danger" data-bs-target="#" >حذف</button>
            btn.className = 'btn py-0 px-1 btn-secondary';
            btn.addEventListener("click",()=>{   
                this.clearCompleted(post.id)
            }) 
            btn.innerHTML = "حذف";
            messageTag.appendChild(btn);


            const icon = document.createElement('button'); // <button type="button" onClick="onClick()">like</button>
            icon.className = post.state  ? 'btn py-0 px-1 btn-danger':'btn py-0 px-1 btn-black';
            icon.innerHTML = "لایک";
            icon.addEventListener("click", ()=>{
                const newState = post.state ? 0 : 1;
                icon.className = newState ? 'btn py-0 px-1 btn-danger':'btn py-0 px-1 btn-black';
                this.likePost(newState,post.id);
            });
            messageTag.appendChild(icon);

            
            postitems.append(cardMain);
            cardMain.append(messageTag);

            cardMain.append(this.inputComment(post.id));
        });
        
        postElement.append(postitems);

        
    }

    inputComment(postId:number){


        const commentElement = document.getElementById('main-items');
        const comments= this.commentService;
        const main = document.getElementById('items');
        if(main) {
            commentElement.removeChild(main);
        }

        const commentitems = document.createElement('div');
        commentitems.setAttribute('id','items');
        

        const cardMain1 = document.createElement('div'); //<div class="card shadow-sm">
        cardMain1.className = 'card shadow-sm';

        
        const cardBody = document.createElement('div');  //<div class="card-body" id="comment">    comment Box
        cardBody.className = 'card-body';
        cardMain1.appendChild(cardBody);

        const comment = document.createElement("input");  // <input type="text" class="form-coltrol" id="commentInput" placeholder="کامنت">
        comment.className = 'form-control';
        cardMain1.appendChild(comment);


        const comBtn = document.createElement('button'); //<button onclick="sendComment()" class="btn py-0 px-1 btn-danger" data-bs-target="#" >ارسال کامنت</button>
        comBtn.className = 'btn py-0 px-1 btn-success';
        comBtn.addEventListener("click",()=>{   
            this.addComment((comment as any).value, postId)
        }) 
        comBtn.innerHTML = "ارسال";
        cardMain1.appendChild(comBtn);
        
        return cardMain1

    }

    renderComment(postId:number) {

        const postElement = document.getElementById('main-items');
        const posts= this.postService.getAll();
        const main = document.getElementById('items')
        if(main) {
            postElement.removeChild(main);
        }

        const postitems = document.createElement('div');
        postitems.setAttribute('id','items');
        
        posts.forEach(comment=>{

            const cardMain = document.createElement('div'); //<div class="card shadow-sm">
            cardMain.className = 'card shadow-sm';
            
            const cardBody = document.createElement('div');  //<div class="card-body" id="tocken">
            cardBody.className = 'card-body';
            cardMain.appendChild(cardBody);


            const cardText = document.createElement('p');  //<p class="card-text" id="p1">
            cardText.className = 'card-text';
            cardBody.appendChild(cardText);

            const cardBody1 = document.createElement('div');  // <div id="allPosts">
            cardBody1.className = 'card-body1';
            cardBody1.innerText = localStorage.getItem('redirect');
            cardMain.appendChild(cardBody1);


            const commentAuth = document.createElement('p');  //sending auther name for comment
            commentAuth.className = 'card-text1';
            commentAuth.innerText = localStorage.getItem('redirect');
            cardBody.appendChild(commentAuth);


            const commentTag = document.createElement('p');  //<p id="showPostFirsttime">
            commentTag.className = 'card-text1';
            commentTag.innerText = comment.message; 
            cardBody.appendChild(commentTag);
        });
        postElement.append(postitems);
    }
}