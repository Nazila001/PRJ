System.register(["../services/postService"], function (exports_1, context_1) {
    "use strict";
    var postService_1, PostApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (postService_1_1) {
                postService_1 = postService_1_1;
            }
        ],
        execute: function () {
            PostApp = class PostApp {
                constructor(po, posts) {
                    this.postService = new postService_1.PostS();
                    // this.postService = new PostS(posts);
                }
                addPost(postAutherName) {
                    // this.postService.add(postAutherName);
                    this.renderPosts();
                }
                clearCompleted() {
                    this.postService.clearCompleted();
                    this.renderPosts();
                }
                renderPosts() {
                    let posts = this.postService.getAll();
                    this.postList.render(posts);
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
