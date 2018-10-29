// const days = ['Mon','Tue','Wed','Thr','Fri','Sat']

// days.forEach(function(day,index){
//     console.log(`starts with ${index+1} -- ${day}`);
// });

// console.log();

// for(let i = 0; i < days.length; i++)
// {
//     console.log(`starts with ${i+1} -- ${days[i]}`);
// }


const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube');
myTodos.push('Go to Gym');

myTodos.forEach(function(todo,index){
    console.log(`Your task no. ${index+1} is :${todo}`);
})
