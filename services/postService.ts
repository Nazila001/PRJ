import { Post,PostState } from "model/post-model";
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
    

    private static lastId = 0;
    private posts : Post[] = [];

    constructor (posts:string[]){
        if (posts){
            posts.forEach(post => this.add(post));
        }
    }


    private find(post:number):Post {

        var filtered = this.posts.filter(x => x.id == post);
        if (filtered.length){
            return filtered[0];
        }
        return null;
    }
    

    add(post: Post): Post;


    add(post: string): Post;


    add(input): Post[] {

        let  post : Post = {
            id : generatePostId(),
            autherName : null,
            message : null,
            state: PostState.Active,
        };

        if (typeof input === 'string'){
            post.autherName = input;
        }else if(typeof input.auther === 'string'){
            post.message = input.message;
        }else{
            throw 'نام معتبر نیست'
        }
        this.posts.push(post);

        return post;
    }



    clearCompleted(): void {
        this.posts = this.posts.filter(x=> x.state == PostState.Active);
    }


    getAll(): Post[] {
        return clone(this.posts);

    }


    update() {
        if (this.posts.length>0){
            let tr : string = "" ;
            this.posts.forEach(item => {
                tr += "<div class='card-body'>";
                tr += "<p class=" + "'card-text'>";
                tr += "<div class="+"'col-4 pt-1 color'>";
                tr += "<div>";
                tr += "<label  class="+"'form-lable mb-3 mt-3'>";
                tr += "</label>"    
                tr += "<input type="+ item +"class='form-coltrol mb-4' id="+"'enterPost' placeholder='پیام خود را وارد کنید'>";
                tr += "<button onclick=" + "type='button' class='btn btn-success'> ارسال </button>";
                tr += "</div>";
                tr += "</p> ";
                tr +=  " <div class='d-flex justify-content-between align-items-center'>";
                tr += "<button onclick="+"update("+item.id+")"+"class='btn py-0 px-1 btn-danger' data-bs-target='#' data-bs-toggle='modal'>حذف</button>";
                tr += "</div>";
                tr += "</div>";
            })
        }else {  
        document.getElementById("tocken").innerHTML = "";
        }
    }

    
    getById(postId: number): Post {
        var post = this.find(postId);
        return clone(post);
    }

}