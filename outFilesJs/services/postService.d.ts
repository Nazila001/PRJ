import { Post } from '../model/post-model';
import { IpostAction } from "services/IpostService";
export declare function generatePostId(): number;
export declare class PostS implements IpostAction {
    private lastId;
    posts: Post[];
    comments: Post[];
    constructor(lastId?: number, posts?: Post[], comments?: Post[]);
    private find;
    addFT(input: any): Post[];
    clearCompleted(postId: number): void;
    getAll(): Post[];
    getById(postId: number): Post;
    likePost(postState: number, postId: number): void;
}
