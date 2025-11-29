"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    // email: "test@123",
    isactive: true,
};
function createUser(_a) {
    var name = _a.name, isactive = _a.isactive;
}
//case 1
createUser({ name: "abc", isactive: true });
//case 2
createUser({ name: "abc", isactive: true, /*email:"test@123"*/ }); // this doesnt accept because we didnt mention email
//case 2 solution
var newUser = { name: "abc", isactive: true, email: "test@123" };
createUser(newUser); //problem solved
function createCourse() {
    return { name: "tyescript", price: 2 }; //if we dont write anything that means any return type
}
function modifyUser(data) {
    return { name: "abc", email: "test@123", isactive: true, done: "yes" };
}
function createuser(u) {
    console.log(u.name);
    console.log(u.email);
    console.log(u.isactive);
}
createuser({ _id: "123", name: "abc", email: "abc", isactive: true });
//without using function
var myuser = {
    _id: "12345",
    name: "h",
    email: "s@s",
    isactive: false
};
myuser.email = "change";
