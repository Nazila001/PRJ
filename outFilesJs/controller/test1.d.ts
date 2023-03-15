export declare class PostApp {
    private postService;
    private commentService;
    constructor();
    addFT(): void;
    clearCompleted(postId: any): void;
    likePost(PostState: number, postId: number): void;
    addComment(input: any, postId: any): void;
    renderPosts(): void;
    inputComment(postId: number): HTMLDivElement;
    renderComment(postId: number): void;
}
