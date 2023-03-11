import { Post } from "../model/post-model";
export interface IpostAction {
    addFT(input: any): Post[];
    getAll(): Post[];
    clearCompleted(): void;
    getById(postId: number): Post;
}
