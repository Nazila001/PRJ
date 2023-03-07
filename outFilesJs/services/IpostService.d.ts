import { Post } from "../model/post-model";
export interface IpostAction {
    addPost(): void;
    addFT(input: any): Post[];
    getAll(): Post[];
    clearCompleted(): void;
    getById(postId: number): Post;
}
