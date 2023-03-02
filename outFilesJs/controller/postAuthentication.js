System.register([], function (exports_1, context_1) {
    "use strict";
    var UserAuthentication;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            UserAuthentication = class UserAuthentication {
                constructor(user) {
                    this.username = user.username;
                    this.pass = user.pass;
                }
                userValid(user) {
                    if (user != undefined && user.length > 3)
                        return true;
                    else
                        return false;
                }
                passValid(pass) {
                    if (pass != undefined && pass.length > 3)
                        return true;
                    else
                        return false;
                }
                validUserE() {
                    return (this.userValid(this.username) && this.passValid(this.pass));
                }
            };
            exports_1("UserAuthentication", UserAuthentication);
        }
    };
});
