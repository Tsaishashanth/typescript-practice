//basically tuple is an array with fixed size and fixed types
//tuple is used only for arrays in typescript

let rlocation: [number, number] = [12.91, 77.60];//here when tuples comes into role bcoz we cannot change order
let response: [number, string] = [200, "OK"];//here also

const user : (string | number)[] = ["hc"]

let tuser : [string, number, boolean] 
tuser = ["sh", 1, true] // here we have give it in order as we initialized

type TUser = [number, string] // this is a touple 
const newuser :TUser = [113, "adb"]

//case
const testarray: [number, string] = [10, 'test']
testarray.push('test');