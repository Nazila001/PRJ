import { UserAuthentication } from '../valid/infoValid';


export class Login{
    constructor(){

        let element = document.getElementById("redirect");
        if(element){
            element.onclick = ()=>{
                let userValidation  = new UserAuthentication(
                {
                    username : 'a@b.com',
                    password : '12345',
                }
                );
                if (userValidation.validUserNE())
                    window.open('http://127.0.0.1:5500/view/main.html')
                else return alert("error")
            }
        }

        let elementPosts = document.getElementById("redirectProfilePage");
        if(elementPosts){
            elementPosts.onclick = ()=>{
                window.location.href = 'http://127.0.0.1:5500/view/posts.html';
        }
        }

        let elementProfile = document.getElementById("redirectProfile");
        if(elementProfile){
            elementProfile.onclick = ()=>{
                window.location.href = 'http://127.0.0.1:5500/view/Profile.html';
            }
        }
    }
}
