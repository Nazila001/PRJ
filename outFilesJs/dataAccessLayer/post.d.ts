import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";
export declare class PostManage implements IpostAction {
    add(post: Post): Post;
    add(post: string): Post;
    addAll(): Post[];
    deletePost(): void;
    getById(postId: number): Post;
}
