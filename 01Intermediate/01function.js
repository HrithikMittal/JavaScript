let sayHello = function(name){
    console.log("Hello World");
    console.log(`Hey ${name}`);
}

sayHello("John");

let fullName = function(firstName,secondName){
    console.log(`Hello ${firstName} ${secondName}`);
}

fullName("Adhikansh","Mittal");

let myAdder = function(num1,num2){
    return (num1+num2);
}
console.log(myAdder(5,9));

let myMultplier = function(num1,num2){
    return (num1*num2);
}
console.log(myMultplier(5,9));

let guestUser = function(name = 'UnName', courseCount = 0 ){ //default parameters
    return `Hello ${name} your course count is ${courseCount}`;
}
console.log(guestUser("Adhikansh Mittal",4));
console.log(guestUser);
console.log(guestUser());