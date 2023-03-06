System.register(["services/postService"], function (exports_1, context_1) {
    "use strict";
    var postService_1, update, deletePost;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (postService_1_1) {
                postService_1 = postService_1_1;
            }
        ],
        execute: function () {
            update = () => {
                new postService_1.PostS().update();
            };
            deletePost = () => {
            };
        }
    };
});
