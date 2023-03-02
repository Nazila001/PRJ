import { Post } from "model/post-model";
export interface IpostAction {
    add(post: Post): Post;
    add(post: string): Post;
    addAll(): Post[];
    update(): Post[];
    deletePost(id: number): void;
    getById(postId: number): Post;
}
