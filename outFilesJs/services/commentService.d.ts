import { Icomment } from './IcomemtService';
export declare class Comments implements Icomment {
    private lastId;
    comments: Comment[];
    constructor(lastId?: number, comments?: Comment[]);
    addComment(input: any, postId: any): Comment[];
}
