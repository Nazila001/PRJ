export class Post {
    id? : number;
    auther : string;
    message : string;
    date? : string | number;
}

export class Person {
    id? : number;
    username: string;
    email? : string; 
    password : string;
    postN? : number;   //related to the number of posts
}

enum postEmpty {
    empty = 0,
    full = 1
}