System.register([], function (exports_1, context_1) {
    "use strict";
    var Comments;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Comments = class Comments {
                constructor(comments = []) {
                    this.comments = comments;
                }
                find(comment) {
                    var filtered = this.comments.filter(x => x.id == comment);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                addComment(input, postId) {
                    let comment = {
                        autherName: localStorage.getItem("redirect"),
                        message: input,
                    };
                    this.comments.push(comment);
                    localStorage.setItem('comments', JSON.stringify(this.comments));
                    return this.comments;
                }
                getAll() {
                    this.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
                    return this.comments;
                }
            };
            exports_1("Comments", Comments);
        }
    };
});
