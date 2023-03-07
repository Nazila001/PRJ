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
                    this.postService = new postService_1.PostS();
                    document.getElementById('addPost').addEventListener("click", () => {
                        this.addFT();
                    });
                    document.getElementById('enterPost').addEventListener("click", () => {
                        this.addPost();
                    });
                    this.renderPosts();
                    // this.postService = new PostS(posts);
                }
                addFT() {
                    const post = document.getElementById('postMessage').value;
                    document.getElementById("showPostFirsttime").innerHTML = post;
                    this.postService.addFT(post);
                    this.renderPosts();
                }
                addPost() {
                    const post = document.getElementById('innerPost').value;
                    document.getElementById("showEnterPost").innerHTML = post;
                    this.postService.addPost();
                }
                clearCompleted() {
                    this.postService.clearCompleted();
                    this.renderPosts();
                }
                renderPosts() {
                    // const posts =['نام نویسنده:','متن پیام:'];
                    // const posts = ['متن پیام:'] 
                    const postElement = document.getElementById('allPosts');
                    const posts = this.postService.getAll();
                    posts.forEach(post => {
                        const divTag = document.createElement('div');
                        const messageTag = document.createElement('p');
                        const userTag = document.createElement('p');
                        // userTag.innerText = post.message;
                        userTag.innerText = localStorage.getItem("redirect");
                        divTag.appendChild(messageTag);
                        // messageTag.innerText = post.message;
                        messageTag.innerText = localStorage.getItem("redirect");
                        divTag.appendChild(messageTag);
                        postElement.append(divTag);
                        divTag.append(messageTag);
                        divTag.append(userTag);
                    });
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
