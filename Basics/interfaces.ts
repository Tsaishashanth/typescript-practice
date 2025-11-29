//we mainly use interfaces to catch the errors easily and to prevent mistakes

interface newuser {
    readonly dbid: number,
    email:string ,
    udi:number,
    googleid ?:string,
    starttrail(): string,
    getcoupon(couponname: string,value: number):number
}

interface newuser{ //we can write the interface twice
    githubtoken ?:string

}

//inheretance
interface newadmin extends newuser{
    role:"admin" | "ta" | "learner"

}
const shas :newadmin = {dbid:1,email:"abc", udi:2211,
    starttrail: () => { //this is a function same as like this function () {return yes}
        return "yes"
    },
    getcoupon: (name: "shashanth") => { //as we see here couponname and name are different but it is okay
        return 10
        //as we see here we didnt pass value but still it is not throwing error
    },
    githubtoken:"github",
    role:"admin"
}

