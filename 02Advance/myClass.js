class User{
    constructor(firstname,lastname,credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
        console.log("Hi I am Adhikansh");
    }
    fullName(){
        return `Your name is ${this.firstname+' '+this.lastname} and credits are ${this.credit} `
    }
    editName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0];
        this.lastname = myname[1];
    }


}
const john = new User("John ","Anderson",34)
//console.log(john)
console.log(john.fullName())

john.editName('johnny Anderson')
console.log(john.fullName())


// const sammy = new User();
// console.log(sammy)
