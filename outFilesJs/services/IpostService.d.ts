import { Post } from "../model/post-model";


export interface IpostAction {
    add(post: Post): Post;
    add(post: string): Post;
    add(input): Post[];
    update(): Post[];
    clearCompleted(): void;
    getById(postId: number): Post;
    toggle(postId:number):void;
}
