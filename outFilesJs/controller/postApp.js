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
                // private postList: PostListComponents;
                constructor() {
                    document.getElementById('addPost').addEventListener("click", () => {
                        this.addPost();
                    });
                    document.getElementById();
                    this.renderPosts();
                    this.postService = new postService_1.PostS();
                    // this.postService = new PostS(posts);
                }
                addPost() {
                    document.getElementById('postMessage').value;
                    // this.postService.add(postAutherName);
                    this.renderPosts();
                }
                clearCompleted() {
                    this.postService.clearCompleted();
                    this.renderPosts();
                }
                renderPosts() {
                    const posts = ['asd', 'asd2', 'asd3'];
                    const postElement = document.getElementById('allPosts');
                    // let postsAll = this.postService.getAll() ;
                    posts.forEach(post => {
                        const divTag = document.createElement('div');
                        // divTag.innerText = post.autherName;
                        const messageTag = document.createElement('p');
                        messageTag.innerText = post;
                        divTag.append(messageTag);
                        postElement.append(divTag);
                    });
                    // this.postList.render(posts);
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
