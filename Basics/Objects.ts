const User = {
    name: "hitesh",
    email:"test@123",
    isactive: true,
}

function createUser({name, isactive}:{name:string, isactive: boolean}) { //first variable and then its type

}
  //case 1
  createUser({name:"abc", isactive:true})
  //case 2
  createUser({name:"abc", isactive:true, /*email:"test@123"*/}) // this doesnt accept because we didnt mention email
  //case 2 solution
  let newUser = {name:"abc", isactive:true, email:"test@123"}
  createUser(newUser) //problem solved

function createCourse ():{name: string, price: number} { //the second {} refers to the return type
    return {name: "tyescript", price: 2}                 //if we dont write anything that means any return type
}

//type keyword
type User = {
    name: string,
    email: string,
    isactive: boolean,
    done : string,
}
function modifyUser(data: User):User {   //here like above we cant write return User type in {} bcoz its type
    return {name:"abc", email:"test@123", isactive:true, done: "yes"}
}

//multiused type
type user = {
    readonly _id :string //when connecting mongdb we write like this and we use readonly to not manipulate code
    name:string
    isactive: boolean
    email:string
    creditcard ?: number //? this symbol represents optional 
}
function createuser(u: user) {  // in this type is user type like all elments in the user should be present in u
    console.log(u. name);
    console.log(u.email);
    console.log(u.isactive);
} 
createuser({_id: "123",name:"abc",email: "abc", isactive:true });

//without using function
let myuser: user = {
    _id: "12345",
    name:"h",
    email: "s@s",
    isactive: false
}
myuser.email = "change";
//myuser._id = "sas"; // we cant change this bcoz we wrote readonly in the above 

//mix and math of two types
type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}