const superheros : string[]= []
const superpower: number [] = []
superheros.push("spiderman");
superpower.push(2)
//const superpower: Array<number> = [] another way to declare the array

type user = {
    name : string 
    isactive: boolean

}
const allusers: user [] = []
allusers.push({name:"abc", isactive:true})

const MLmodels: number [][] = [
    [255, 255, 255], //pixel values in ml model
    []
]

//union arrays

const data: number [] = [1,2,3,]
const data1 :string [] = ["1", "2", "3"]
const data3 :string[] | number [] = ["1", "2", "3"] // this doesnt give error: it should be all number or string cant be mixed
const data4: (string | number|boolean ) [] = [1, "2", 3, true] // here using this sytax it can be mixed