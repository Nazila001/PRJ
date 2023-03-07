export class Post {
    id? : number;
    autherName : string;
    message : string;
    state : PostState;
    date? : string | number;
}

export enum PostState {
    Active = 0,
    Complete = 1
}

export class Person {
    id? : number;
    username: string;
    email? : string; 
    password : string;
    postN? : number;   //related to the number of posts
}
