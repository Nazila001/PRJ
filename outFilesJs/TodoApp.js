System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TodoApp = class TodoApp {
                constructor() {
                    this.age();
                }
                age() {
                    console.log('test');
                }
            };
            exports_1("TodoApp", TodoApp);
        }
    };
});
