System.register([], function (exports_1, context_1) {
    "use strict";
    var PostManage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PostManage = class PostManage {
                constructor() {
                    // lsv : Post[] = new Array<Post>();
                    this.lsv = [{ id: 1, auther: "Max", message: "hello world" }];
                }
                add(post) {
                    throw new Error("Method not implemented.");
                }
                addAll() {
                    throw new Error("Method not implemented.");
                }
                update() {
                    throw new Error("Method not implemented.");
                }
                deletePost(id) {
                    let index = this.lsv.findIndex(item => item.id);
                    this.lsv.splice(index, 1);
                    this.update();
                }
                getById(postId) {
                    throw new Error("Method not implemented.");
                }
            };
            exports_1("PostManage", PostManage);
        }
    };
});
