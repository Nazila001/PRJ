import { Post,PostState } from "model/post-model";
import '//code.jquer.com/jquery-1.12.1.min.js';
import { PostS } from '../services/postService';


export default class PostListComponents {  //creating posts and controling them
    private $po : any;

    constructor (po : HTMLElement) {
        this.$po = $(po);
    }

    render(posts){
        this.$po.html('');
    }


}

