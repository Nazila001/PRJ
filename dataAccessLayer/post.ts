import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";

export class PostManage implements IpostAction {
    add(post: Post): Post;
    add(post: string): Post;
    add(post: unknown): import("../model/post-model").Post {
        throw new Error("Method not implemented.");
    }
    addAll(): Post[] {
        throw new Error("Method not implemented.");
    }
    deletePost(): void {
        throw new Error("Method not implemented.");
    }
    getById(postId: number): Post {
        throw new Error("Method not implemented.");
    }

}