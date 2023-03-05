import { Post } from "../model/post-model";
export interface IpostAction {
    getAll(): Post[];
    update(): any;
    clearCompleted(): void;
    getById(postId: number): Post;
}
