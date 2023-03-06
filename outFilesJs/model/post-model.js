// import { NewType } from "./NewType";
System.register([], function (exports_1, context_1) {
    "use strict";
    var Post, PostState, Person;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {// import { NewType } from "./NewType";
            Post = class Post {
            };
            exports_1("Post", Post);
            (function (PostState) {
                PostState[PostState["Active"] = 0] = "Active";
                PostState[PostState["Complete"] = 1] = "Complete";
            })(PostState || (PostState = {}));
            exports_1("PostState", PostState);
            Person = class Person {
            };
            exports_1("Person", Person);
        }
    };
});
