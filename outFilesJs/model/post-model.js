System.register([], function (exports_1, context_1) {
    "use strict";
    var Post, Person, postEmpty;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Post = class Post {
            };
            exports_1("Post", Post);
            Person = class Person {
            };
            exports_1("Person", Person);
            (function (postEmpty) {
                postEmpty[postEmpty["empty"] = 0] = "empty";
                postEmpty[postEmpty["full"] = 1] = "full";
            })(postEmpty || (postEmpty = {}));
        }
    };
});
