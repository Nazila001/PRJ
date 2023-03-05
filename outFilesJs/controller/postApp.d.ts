export declare class PostApp {
    private postService;
    private postList;
    constructor(po: any, posts: any);
    addPost(postAutherName: any): void;
    clearCompleted(): void;
    renderPosts(): void;
}
