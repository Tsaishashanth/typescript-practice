function addtwo(num: number) {
    // return num+2;
    return  "hello";
}

addtwo(5)

function getUpper(val :String) {
    return val.toUpperCase();
}

function signUpUser(name:String, email:String, isPaid:boolean){

}

signUpUser("sai", "dev", false)

let loginUser = (name :String, email:String , ispaid:boolean = false) => {} //ispaid false is the default value 

loginUser("s", "sos")


function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (S:String) : String => { // here after S we have : we use that to mention the return type
    return "hello"
}

const heros = ["thor", "spidy", "batman"] 

heros.map(hero => {
    return `hero is ${hero}` //here there is no need for for look when we are using mapping
})


function consoleError(errmsg:string): void{
    console.log(errmsg);
}
function handleError(errmsg:string): never{
    throw new Error(errmsg);
}
export {}