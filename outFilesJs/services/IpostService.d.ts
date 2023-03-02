import { Post } from "model/post-model";
export interface IpostAction {
    add(post: Post): Post;
    add(post: string): Post;
    addAll(): Post[];
    deletePost(): void;
    getById(postId: number): Post;
}
