import { Post } from "model/post-model";
export declare class PostValidation {
    auther: string;
    message: string;
    constructor(post: Post);
    private autherValid;
    private messageValid;
    validPostE(): boolean;
}
