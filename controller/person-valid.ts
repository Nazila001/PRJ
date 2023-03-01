import { Person } from "../model/person-model";

export class PersonValid {
    validData(person:Person): boolean {   //recognizing that data is valid or no  / validation data
        return  this.username(person.username) &&
        this.name(parent.name) &&
        this.family(person.family) &&
        this.message(person.message)
    }

    private username(un:string) : boolean{
        if(un.length >= 4 )
            return true
        else return false
    }

    private name(na:string) : boolean{
        if(na.length >= 3 )
            return true
        else return false
    }

    private family(fa:string) : boolean{
        if(fa.length >= 3 )
            return true
        else return false
    }

    private message(mes:string) : boolean{
        if(mes.length >= 10 )
            return true
        else return false
    }


}
