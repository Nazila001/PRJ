import { Post, PostState } from '../model/post-model';
import { IpostAction } from "services/IpostService";

let lastId = 0;

function generatePostId():number {
    return(lastId += 1);
}

function clone<T> (src:T) :T {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
}

export class PostS implements IpostAction {
    

    constructor (private lastId = 0,
        private posts : Post[] = [],){}
        


    private find(post:number):Post {

        var filtered = this.posts.filter(x => x.id == post);
        if (filtered.length){
            return filtered[0];
        }
        return null;
    }



    addFT(input): Post[] {

        let  post : Post = {
            id : generatePostId(),
            autherName : localStorage.getItem("redirect"),
            message : input,
            state: PostState.Active,
        };

        this.posts.push(post);
        localStorage.setItem('posts',JSON.stringify(this.posts));
        return this.posts;
    }



    clearCompleted(postId : number): void {
        this.posts = this.posts.filter(x=> x.state == PostState.Active);
    }


    getAll(): Post[] {
        this.posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) :[];
        return this.posts;

    }

    
    getById(postId: number): Post {
        var post = this.find(postId);
        return clone(post);
    }
}