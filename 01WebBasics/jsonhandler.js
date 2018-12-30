const student = {
    name:"John",
    age:23,
    isActive:true
}

//convert this object into a string to be stored in local storage

const studentObjToString = JSON.stringify(student)
console.log(typeof(student))
console.log(typeof(studentObjToString))


const stringtoStudentObj = JSON.parse(studentObjToString)
console.log(typeof(stringtoStudentObj));