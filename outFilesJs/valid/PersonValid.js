System.register([], function (exports_1, context_1) {
    "use strict";
    var PersonValid;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PersonValid = class PersonValid {
                validData(person) {
                    return this.username(person.username) &&
                        this.password(person.password);
                }
                username(un) {
                    if (un.length >= 4)
                        return true;
                    else
                        return false;
                }
                password(pass) {
                    if (pass.length >= 3)
                        return true;
                    else
                        return false;
                }
            };
            exports_1("PersonValid", PersonValid);
        }
    };
});
