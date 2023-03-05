System.register(["//code.jquer.com/jquery-1.12.1.min.js"], function (exports_1, context_1) {
    "use strict";
    var PostListComponents;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            PostListComponents = class PostListComponents {
                constructor(po) {
                    this.$po = $(po);
                }
                render(posts) {
                    this.$po.html('');
                }
            };
            exports_1("default", PostListComponents);
        }
    };
});
