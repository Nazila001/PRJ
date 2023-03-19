System.register(["../services/postService", "../services/commentService"], function (exports_1, context_1) {
    "use strict";
    var postService_1, commentService_1, PostApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (postService_1_1) {
                postService_1 = postService_1_1;
            },
            function (commentService_1_1) {
                commentService_1 = commentService_1_1;
            }
        ],
        execute: function () {
            PostApp = class PostApp {
                constructor() {
                    this.postService = new postService_1.PostS();
                    this.commentService = new commentService_1.Comments();
                    document.getElementById('addPost').addEventListener("click", () => {
                        this.addFT();
                    });
                    this.renderPosts();
                    document.getElementById('sort').addEventListener("click", () => {
                        this.sortPosts();
                        this.renderPosts();
                    });
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
                addComment(input, postId) {
                    this.commentService.addComment(input, postId);
                    // this.renderComment(postId);
                }
                sortPosts() {
                    this.postService.sortPosts();
                }
                renderPosts() {
                    const postElement = document.getElementById('main-items'); //<div id="main-items" class="col">
                    const posts = this.postService.getAll();
                    const main = document.getElementById('items');
                    if (main) {
                        postElement.removeChild(main); //<div  id="main">
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
                        messageTag.appendChild(icon); //like button append to main folder
                        postitems.append(cardMain); //post fram and comment fram show
                        cardMain.append(messageTag);
                        cardMain.append(this.inputComment(post.id, cardMain));
                        cardMain.append(this.renderComment(post.id, cardMain));
                    });
                    postElement.append(postitems);
                }
                inputComment(postId, cardMain) {
                    const cardMain1 = document.createElement('div'); //<div class="card shadow-sm">
                    cardMain1.className = 'card shadow-sm';
                    const comment = document.createElement("input"); // <input type="text" class="form-coltrol" id="commentInput" placeholder="کامنت">
                    comment.className = 'form-control';
                    cardMain1.appendChild(comment);
                    const comBtn = document.createElement('button'); //<button onclick="sendComment()" class="btn py-0 px-1 btn-danger" data-bs-target="#" >ارسال کامنت</button>
                    comBtn.className = 'btn py-0 px-1 btn-success';
                    comBtn.addEventListener("click", () => {
                        this.addComment(comment.value, postId);
                        // window.location.reload();
                        cardMain.append(this.renderComment(postId, cardMain));
                    });
                    comBtn.innerHTML = "ارسال";
                    cardMain1.appendChild(comBtn);
                    return cardMain1;
                }
                renderComment(postId, cardMain) {
                    const main = document.getElementById(`items${postId}`);
                    if (main) {
                        cardMain.removeChild(main); //<div  id="main">
                    }
                    const commentElement = document.createElement("div");
                    commentElement.setAttribute('id', `items${postId}`);
                    const comments = this.commentService.getComment(postId);
                    comments.forEach(comment => {
                        const cardMain = document.createElement('div'); //<div class="card shadow-sm">
                        cardMain.className = 'card shadow-sm';
                        const commentAuth = document.createElement('p'); //sending auther name for comment
                        commentAuth.className = 'card-text1';
                        commentAuth.innerText = localStorage.getItem('redirect');
                        cardMain.appendChild(commentAuth);
                        const commentText = document.createElement('p'); //<p id="showPostFirsttime">
                        commentText.className = 'card-text1';
                        commentText.innerText = comment.message;
                        cardMain.appendChild(commentText);
                        commentElement.append(cardMain);
                    });
                    return commentElement;
                }
            };
            exports_1("PostApp", PostApp);
        }
    };
});
