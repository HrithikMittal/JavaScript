// const sayHello = function(name){
//     return "Hey there, "+name+" !"
// }
// console.log(sayHello('Adhikansh'))

const sayHello = (name) => `Hey there, ${name} !`

console.log(sayHello('Adhikansh'));

const todos = [{
    title:"Buy bread",
    isDone:true,
},{
    title:"Go to Gym",
    isDone:true,
},{
    tite:"Record youtube video",
    isDone:false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true )

console.log(thingsDone);


const cameras = {
    price: 600,
    weight: 2000,
    // myDes: () => {
    //     return `This canon camera is of $${this.price} and ${this.weight}g`
    // }
    myDes: function(){
        return `This canon camera is of $${this.price} and ${this.weight}g`    }
}
console.log(cameras.myDes());