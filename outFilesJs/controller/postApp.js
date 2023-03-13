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
                constructor() {
                    this.listPosts = []; //a list to add posts of users
                    this.postService = new postService_1.PostS();
                    document.getElementById('addPost').addEventListener("click", () => {
                        this.addFT();
                    });
                    this.renderPosts();
                }
                addFT() {
                    const post = document.getElementById('postMessage').value;
                    this.postService.addFT(post);
                    this.renderPosts();
                }
                clearCompleted(postId) {
                    this.postService.clearCompleted(postId);
                    this.renderPosts();
                }
                likePost(PostState, postId) {
                    this.postService.likePost(PostState, postId);
                    this.renderPosts();
                }
                renderPosts() {
                    const postElement = document.getElementById('main-items');
                    const posts = this.postService.getAll();
                    const main = document.getElementById('items');
                    if (main) {
                        postElement.removeChild(main);
                    }
                    const postitems = document.createElement('div');
                    postitems.setAttribute('id', 'items');
                    posts.forEach(post => {
                        const cardMain = document.createElement('div'); //<div class="card shadow-sm">
                        cardMain.className = 'card shadow-sm';
                        const cardBody = document.createElement('div'); //<div class="card-body" id="tocken">
                        cardBody.className = 'card-body';
                        cardMain.appendChild(cardBody);
                        const cardText = document.createElement('p'); //<p class="card-text" id="p1">
                        cardText.className = 'card-text';
                        cardBody.appendChild(cardText);
                        const cardBody1 = document.createElement('div'); // <div id="allPosts">
                        cardBody1.className = 'card-body1';
                        cardBody1.innerText = localStorage.getItem('redirect');
                        cardText.appendChild(cardBody1);
                        const messageTag = document.createElement('p'); //<p id="showPostFirsttime">
                        messageTag.className = 'card-text1';
                        messageTag.innerText = post.message;
                        cardBody1.appendChild(messageTag);
                        const cardBody2 = document.createElement('div'); // <div class='small-font text-center top-20'>
                        cardBody2.className = 'small-font text-center top-20';
                        messageTag.appendChild(cardBody2);
                        const cardText1 = document.createElement('div'); //<div class='red-bg'>
                        cardText1.className = 'card-body';
                        messageTag.appendChild(cardText1);
                        const btn = document.createElement('button'); //<button onclick="deletePost()" class="btn py-0 px-1 btn-danger" data-bs-target="#" >حذف</button>
                        btn.className = 'btn py-0 px-1 btn-secondary';
                        btn.addEventListener("click", () => {
                            this.clearCompleted(post.id);
                        });
                        btn.innerHTML = "حذف";
                        messageTag.appendChild(btn);
                        const icon = document.createElement('button'); // <button type="button" onClick="onClick()">like</button>
                        icon.className = post.state ? 'btn py-0 px-1 btn-danger' : 'btn py-0 px-1 btn-black';
                        icon.innerHTML = "لایک";
                        icon.addEventListener("click", () => {
                            const newState = post.state ? 0 : 1;
                            icon.className = newState ? 'btn py-0 px-1 btn-danger' : 'btn py-0 px-1 btn-black';
                            this.likePost(newState, post.id);
                        });
                        messageTag.appendChild(icon);
                        postitems.append(cardMain);
                        cardMain.append(messageTag);
                    });
                    postElement.append(postitems);
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
