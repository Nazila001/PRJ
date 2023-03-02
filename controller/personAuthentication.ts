import { Person } from "../model/post-model";

export class PersonValid {
    validData(person:Person): boolean {   //recognizing that data is valid or not  / validation data
        return  this.username(person.username) &&
        this.password(person.email)     
    }

    private username(un:string) : boolean{
        if(un.length >= 4 )
            return true
        else return false
    }

    // private email(em:string) : boolean{
    //     if(em.length >= 3 )
    //         return true
    //     else return false
    // }

    // private message(mes:string) : boolean{
    //     if(mes.length >= 10 )
    //         return true
    //     else return false
    // }

    private password(pass:string) : boolean{
        if(pass.length >= 10 )
            return true
        else return false
    }

}
