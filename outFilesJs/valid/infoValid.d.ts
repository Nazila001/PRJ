import { Person } from '../model/post-model';
export declare class UserAuthentication {
    username: string;
    password: string;
    constructor(user: Person);
    private passValid;
    private userValid;
    validUserNE(): boolean;
}
