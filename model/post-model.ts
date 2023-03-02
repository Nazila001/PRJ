export class Post {
    id : number;
    auther : string;
    message : string;
    date? : string | number;
}

export class Person {
    id : number;
    username: string;
    email : string; 
    pass : string;
    postN : number;   //related to the number of posts
}