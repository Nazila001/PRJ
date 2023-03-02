import { Person } from "model/post-model";


export class PersonValid {
    
    validData(person: Person): boolean {
        return this.username(person.username) &&
            this.password(person.password);
    }

    private username(un: string): boolean {
        if (un.length >= 4)
            return true;
        else
            return false;
    }

    private password(pass: string): boolean {
        if (pass.length >= 3)
            return true;
        else
            return false;
    }



}
