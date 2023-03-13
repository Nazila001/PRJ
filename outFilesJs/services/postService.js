System.register(["../model/post-model"], function (exports_1, context_1) {
    "use strict";
    var post_model_1, lastId, PostS;
    var __moduleName = context_1 && context_1.id;
    function generatePostId() {
        return (lastId += 1);
    }
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    return {
        setters: [
            function (post_model_1_1) {
                post_model_1 = post_model_1_1;
            }
        ],
        execute: function () {
            lastId = 0;
            PostS = class PostS {
                constructor(lastId = 0, posts = []) {
                    this.lastId = lastId;
                    this.posts = posts;
                }
                find(post) {
                    var filtered = this.posts.filter(x => x.id == post);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                addFT(input) {
                    let post = {
                        id: generatePostId(),
                        autherName: localStorage.getItem("redirect"),
                        message: input,
                        state: post_model_1.PostState.Active,
                    };
                    this.posts.push(post);
                    localStorage.setItem('posts', JSON.stringify(this.posts));
                    return this.posts;
                }
                clearCompleted(postId) {
                    const index = this.posts.findIndex(value => value.id == postId);
                    if (index >= 1) {
                        // this.posts = this.posts.splice(index,1);
                        let postDeleted = this.posts.splice(index, 1);
                        this.posts = this.posts.filter(value => value.id != index);
                        // this.posts.length()
                        localStorage.setItem('posts', JSON.stringify(this.posts));
                    }
                }
                getAll() {
                    this.posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
                    return this.posts;
                }
                getById(postId) {
                    var post = this.find(postId);
                    return clone(post);
                }
            };
            exports_1("PostS", PostS);
        }
    };
});
