import { Person } from "../model/post-model";
export declare class UserAuthentication {
    username: string;
    pass: string;
    constructor(user: Person);
    private userValid;
    private passValid;
    validUserE(): boolean;
}
