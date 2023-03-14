import { Post } from '../model/post-model';
export declare class Comments {
    private lastId;
    comments: Post[];
    constructor(lastId?: number, comments?: Post[]);
    addComment(input: any): Post[];
}
