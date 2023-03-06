import { Post } from "../model/post-model";
import { IpostAction } from "services/IpostService";
export declare class PostS implements IpostAction {
    private lastId;
    private posts;
    constructor(lastId?: number, posts?: Post[]);
    private find;
    addPost(): void;
    addFT(input: any): Post[];
    clearCompleted(): void;
    getAll(): Post[];
    update(): void;
    getById(postId: number): Post;
}
