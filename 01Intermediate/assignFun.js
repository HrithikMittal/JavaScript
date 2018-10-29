let gradeChecker = function(mark,marks){
    if(typeof(mark) === "number" && typeof(marks) === "number")
    {
        let per = (mark/marks)*100;
        per = per.toFixed(2);
        console.log(`Percentage is : - ${per}%`);
        if(per>=90)
            console.log("You get A grade");
        else if(per>=80)
            console.log("You got B grade");
        else if(per>=70)
            console.log("You get C grade");
        else if(per>=60)
            console.log("You get D grade");
        else if(per>=50)
            console.log("You get E grade");
    }
    else{
        console.log("Please Enter Marks in Integer only");
    }
}
gradeChecker("xyz",90);