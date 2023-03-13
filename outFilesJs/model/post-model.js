System.register([], function (exports_1, context_1) {
    "use strict";
    var Post, PostState, Person;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Post = class Post {
            };
            exports_1("Post", Post);
            (function (PostState) {
                PostState[PostState["Like"] = 1] = "Like";
                PostState[PostState["Dislike"] = 0] = "Dislike";
            })(PostState || (PostState = {}));
            exports_1("PostState", PostState);
            Person = class Person {
            };
            exports_1("Person", Person);
        }
    };
});
