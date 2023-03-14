export declare class PostApp {
    private postService;
    listPosts: any[];
    constructor();
    addFT(): void;
    clearCompleted(postId: any): void;
    likePost(PostState: number, postId: number): void;
    renderPosts(): void;
}
