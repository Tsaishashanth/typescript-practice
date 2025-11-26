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




export{}