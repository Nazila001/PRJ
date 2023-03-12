import { Post } from '../model/post-model';
import { IpostAction } from "services/IpostService";
export declare class PostS implements IpostAction {
    private lastId;
    private posts;
    constructor(lastId?: number, posts?: Post[]);
    private find;
    addFT(input: any): Post[];
    clearCompleted(postId: number): void;
    getAll(): Post[];
    getById(postId: number): Post;
}
