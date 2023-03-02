System.register([], function (exports_1, context_1) {
    "use strict";
    var PostValidation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PostValidation = class PostValidation {
                constructor(post) {
                    this.auther = post.auther;
                    this.message = post.message;
                }
                autherValid(auther) {
                    if (auther != undefined && auther.length >= 4)
                        return true;
                    else
                        return false;
                }
                messageValid(message) {
                    if (message != undefined && message.length >= 4)
                        return true;
                    else
                        return false;
                }
                validPostE() {
                    return (this.autherValid(this.auther) && this.messageValid(this.message));
                }
            };
            exports_1("PostValidation", PostValidation);
        }
    };
});
