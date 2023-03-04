// import { Post } from "model/post-model";
// import { IpostAction } from "services/IpostService";

// export class PostManage implements IpostAction {

//     // lsv : Post[] = new Array<Post>();
//     lsv :  Post[] = [{id:1, auther:"Max", message: "hello world"}]

//     add(post: Post): Post;

//     add(post: string): Post;

//     add(post: unknown): import("../model/post-model").Post {
//         throw new Error("Method not implemented.");
//     }
//     addAll(): Post[] {
//         throw new Error("Method not implemented.");
//     }

//     update(): Post[] {
//         throw new Error("Method not implemented.");
//     }

//     deletePost(id:number): void {
//         let index = this.lsv.findIndex (item => item.id);
//         this.lsv.splice(index,1);
//         this.update();
//     }
//     getById(postId: number): Post {
//         throw new Error("Method not implemented.");
//     }

// }