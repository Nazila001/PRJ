import { Person } from '../model/post-model';


export class UserAuthentication {

    username:string;
    password:string;

        constructor(user:Person){
        this.username = user.username;
        this.password = user.password;
    }

    private passValid (pass:string) {
        if (pass != undefined && pass.length>3 )
            return true
        else return false
    }

    private userValid (user:string) {
        if (user != undefined && user.length>3 )
            return true
        else return false
    }

    validUserNE() : boolean{
        return (this.userValid(this.username) && this.passValid(this.password));
    }

}