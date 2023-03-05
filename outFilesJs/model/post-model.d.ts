import { NewType } from "./NewType";
export declare class Post {
    id?: number;
    autherName: string;
    message: string;
    state: NewType;
    date?: string | number;
}
export declare enum PostState {
    Active = 0,
    Complete = 1
}
export declare class Person {
    id?: number;
    username: string;
    email?: string;
    password: string;
    postN?: number;
}
