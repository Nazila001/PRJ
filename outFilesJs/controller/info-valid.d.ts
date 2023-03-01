import { Person } from "../model/person-model";
export declare class UserAuthentication {
    username: string;
    pass: string;
    constructor(user: Person);
    private userValid;
    private passValid;
    validUserE(): boolean;
}
