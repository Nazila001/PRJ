System.register([], function (exports_1, context_1) {
    "use strict";
    var Comments;
    var __moduleName = context_1 && context_1.id;
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    return {
        setters: [],
        execute: function () {
            Comments = class Comments {
                constructor(comments = []) {
                    this.comments = comments;
                }
                find(postId) {
                    var filtered = this.comments.filter(c => c.id == postId);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                addComment(input, postId) {
                    let comment = {
                        id: postId,
                        autherName: localStorage.getItem("redirect"),
                        message: input,
                    };
                    this.comments.push(comment);
                    localStorage.setItem('comments', JSON.stringify(this.comments));
                    return this.comments;
                }
                getComment(postId) {
                    this.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
                    return this.comments.filter(value => value.id == postId);
                    return this.comments;
                }
            };
            exports_1("Comments", Comments);
            // getAll(): Comment[] {
            //     this.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) :[];
            //     return this.comments;
            // }
        }
    };
});
