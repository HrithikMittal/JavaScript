function myValidation(){
    let myValue = document.getElementById('myform').value;
    console.log(myValue);
    let changeArea = document.getElementById('idone');
    
    if(isNaN(myValue) || myValue<1 || myValue>20){
        console.log("Not a valid input");
        changeArea.textContent = 'Not a valid input'
    }else{
        console.log("This input is OK");
        changeArea.textContent = 'This input is OK'
    }

}

// form validation

document.querySelector('.myform').addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.number.value);
})