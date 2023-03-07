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
                        this.addFT();
                    });
                    document.getElementById('enterPost').addEventListener("click", () => {
                        this.addPost();
                    });
                    this.renderPosts();
                    this.postService = new postService_1.PostS();
                    // this.postService = new PostS(posts);
                }
                addFT() {
                    const post = document.getElementById('postMessage').value;
                    document.getElementById("showPostFirsttime").innerHTML = post;
                    this.postService.addPost();
                    this.renderPosts();
                }
                addPost() {
                    const post = document.getElementById('innerPost').value;
                    document.getElementById("showEnterPost").innerHTML = post;
                    this.postService.addPost();
                    this.renderPosts();
                }
                clearCompleted() {
                    this.postService.clearCompleted();
                    this.renderPosts();
                }
                renderPosts() {
                    const posts = ['نام نویسنده:', 'متن پیام:'];
                    const postElement = document.getElementById('allPosts');
                    posts.forEach(post => {
                        const divTag = document.createElement('div');
                        const messageTag = document.createElement('p');
                        messageTag.innerText = post;
                        divTag.append(messageTag);
                        postElement.append(divTag);
                    });
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
