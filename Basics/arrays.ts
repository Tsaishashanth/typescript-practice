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