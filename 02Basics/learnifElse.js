if(false){
    console.log("Hi I am in If condition");
}
else if(true){
    console.log("Hi i am in else if condition");
}
else{
    console.log("Hi i am in else condition");
}


var whoIsHere = 'teacher'

if(whoIsHere === 'user'){
    console.log("Greeting message for user")
    console.log("Allow access to view all courses")
}
else if(whoIsHere === 'teacher'){
    console.log("Greeting message for TEACHER")
    console.log("Allow access to his courses")
}
else{
    console.log("Message:please verify your email")
    console.log("send user an email for verification")
}