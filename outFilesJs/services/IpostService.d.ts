import { Post } from '../model/post-model';
export interface IpostAction {
    addFT(input: any): Post[];
    getAll(): Post[];
    clearCompleted(postId: number): void;
    getById(postId: number): Post;
    likePost(postState: number, postId: number): void;
}
