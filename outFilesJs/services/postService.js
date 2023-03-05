System.register(["model/post-model"], function (exports_1, context_1) {
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
                    // if (posts){
                    //     posts.forEach(post => this.add(post));
                    // }
                }
                find(post) {
                    var filtered = this.posts.filter(x => x.id == post);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                // add(post: Post): Post;
                // add(post: string): Post;
                // add(input): Post[] {
                //     let  post : Post = {
                //         id : generatePostId(),
                //         autherName : null,
                //         message : null,
                //         state: PostState.Active,
                //     };
                //     if (typeof input === 'string'){
                //         post.autherName = input;
                //     }else if(typeof input.auther === 'string'){
                //         post.message = input.message;
                //     }else{
                //         throw 'نام معتبر نیست'
                //     }
                //     this.posts.push(post);
                //     return this.posts;
                // }
                clearCompleted() {
                    this.posts = this.posts.filter(x => x.state == post_model_1.PostState.Active);
                }
                getAll() {
                    return clone(this.posts);
                }
                update() {
                    if (this.posts.length > 0) {
                        let tr = "";
                        this.posts.forEach(item => {
                            tr += "<div class='card-body'>";
                            tr += "<p class=" + "'card-text'>";
                            tr += "<div class=" + "'col-4 pt-1 color'><div>";
                            tr += "<label  class=" + "'form-lable mb-3 mt-3'></label>";
                            tr += "<input type=" + item + "class='form-coltrol mb-4' id=" + "'enterPost' placeholder='پیام خود را وارد کنید'>";
                            tr += "<button onclick=" + "type='button' class='btn btn-success'> ارسال</button>";
                            tr += "</div>";
                            tr += "</p> ";
                            tr += " <div class='d-flex justify-content-between align-items-center'>";
                            tr += "<button onclick=" + "update(" + item.id + ")" + "class='btn py-0 px-1 btn-danger' data-bs-target='#' data-bs-toggle='modal'>حذف</button>";
                            tr += "</div></div>";
                        });
                    }
                    else {
                        document.getElementById("tocken").innerHTML = "";
                    }
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
