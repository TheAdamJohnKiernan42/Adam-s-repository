// Question 1
let number1 = Number(prompt("Enter a Number:"))
number1 %= 2
    if(number1==0){
        console.log("Even number")
    }
    else{
        console.log("Odd number")
    }

// Question 2
let number2 = Number(prompt("Enter a Number:"))
let number3 = Number(prompt("Enter a Number:"))
    if(number2 > number3){
        console.log(number2,"is greater than", number3)
    }
    else if(number3 > number2){
        console.log(number3,"is greater than", number2)
    }
    else{
        console.log(number2,"is equal to", number3)
    }

// Question 3
let number4 = Number(prompt("Enter a Number:"))
let number5 = Number(prompt("Enter a Number:"))
let number6 = Number(prompt("Enter a Number:"))
    if(number4 > number5){
        if(number4 > number6){
            console.log(number4,"is the largest number")
        }
    }
    else if(number5 > number4){
        if(number5 > number6){
            console.log(number5,"is the largest number")
        }
    }
    else{
        console.log(number6,"is the largest number")
    }

// Question 4
let number7 = Number(prompt("Enter a Number:"))
let number8 = Number(prompt("Enter a Number:"))
let number9 = Number(prompt("Enter a Number:"))
    if(number7==number8){
        if(number7==number9){
            console.log("This is an equilateral triangle");
        } 
        if(number7!=number9){
           console.log("This is an isosceles triangle");
        }
    }
    else if(number7!=number8){
        if(number8==number9){
            console.log("This ia an isosceles triangle");
        }
        else if (number7==number9){
            console.log("This is an isosceles triangle");
        }
        else{
            console.log("This is a scalene triangle");
        }
    }
// Question 5

    