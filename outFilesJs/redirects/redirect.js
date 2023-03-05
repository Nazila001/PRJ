System.register(["../valid/infoValid"], function (exports_1, context_1) {
    "use strict";
    var infoValid_1, Login;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (infoValid_1_1) {
                infoValid_1 = infoValid_1_1;
            }
        ],
        execute: function () {
            Login = class Login {
                constructor() {
                    let element = document.getElementById("redirect");
                    if (element) {
                        element.onclick = () => {
                            console.log('test');
                            let userValidation = new infoValid_1.UserAuthentication({
                                username: 'a@b.com',
                                password: '12345',
                            });
                            if (userValidation.validUserNE())
                                window.open('http://127.0.0.1:5500/view/index.html');
                            else
                                return alert("error");
                        };
                    }
                    let elementPosts = document.getElementById("redirectProfilePage");
                    if (elementPosts) {
                        elementPosts.onclick = () => {
                            window.location.href = 'http://127.0.0.1:5500/view/posts.html';
                        };
                    }
                    let elementProfile = document.getElementById("redirectProfile");
                    if (elementProfile) {
                        elementProfile.onclick = () => {
                            window.location.href = 'http://127.0.0.1:5500/view/Profile.html';
                        };
                    }
                }
            };
            exports_1("Login", Login);
        }
    };
});
