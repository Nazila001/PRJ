System.register([], function (exports_1, context_1) {
    "use strict";
    var Comments;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Comments = class Comments {
                constructor(lastId = 0, comments = []) {
                    this.lastId = lastId;
                    this.comments = comments;
                }
                addComment(input) {
                    let comment = {
                        autherName: localStorage.getItem("redirect"),
                        message: input,
                    };
                    this.comments.push(comment);
                    localStorage.setItem('comments', JSON.stringify(this.comments));
                    return this.comments;
                }
            };
            exports_1("Comments", Comments);
        }
    };
});
