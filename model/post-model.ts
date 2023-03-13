export class Post {
    id? : number;
    autherName : string;
    message : string;
    state : PostState;
    date? : string | number;
}

export enum PostState {
    Like = 1 ,
    Dislike = 0
}

export class Person {
    id? : number;
    username: string;
    email? : string; 
    password : string;
    postN? : number;   //related to the number of posts
}
