import { Post } from '../model/post-model';
import { IpostAction } from "services/IpostService";
export declare function generatePostId(): number;
export declare class PostS implements IpostAction {
    posts: Post[];
    comments: Post[];
    constructor(posts?: Post[], comments?: Post[]);
    private find;
    addFT(input: any): Post[];
    clearCompleted(postId: number): void;
    getAll(): Post[];
    getById(postId: number): Post;
    likePost(postState: number, postId: number): void;
    sortPosts(): void;
}
