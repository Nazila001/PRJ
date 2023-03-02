import { Post } from "model/post-model";
import { IpostAction } from "services/IpostService";
export declare class PostManage implements IpostAction {
    lsv: Post[];
    add(post: Post): Post;
    add(post: string): Post;
    addAll(): Post[];
    update(): Post[];
    deletePost(id: number): void;
    getById(postId: number): Post;
}
