let score: number | string = 33; // when we want the score variable to be number as well as string sometimes
score = 44 , score = "55";

type User = {
    name: string;
    id:number;
}
type admin = {
    username: string;
    id:number;
}
let shashanth: User | admin = {  //here multiple types are usefull, like we can access anything we want
    name: "hitesh",
    id:334,
}
shashanth = {username: "hc", id:334}

//multiple types in functions
//case1
function getdbid (id:number | string) {
    //making some API calls
    console.log(`Db id is :${id}`)
}
getdbid(3), getdbid("3")
//case2
function getid( id:number|string) {
    //id.toLowerCase() //here number cannot be done, only string , here ts know more
}
//solution - write if else statement


let car : "wheel" | "steer" | "horn" //ts is strict in use cases, helps in production code
//car = "drive"