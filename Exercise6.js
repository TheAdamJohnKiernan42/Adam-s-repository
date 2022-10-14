// Question 1
let count=0
while(count<=10){
    console.log(count);
    count++;
}
// Question 2
let even=2
do{
    console.log(even);
    even=even+2;
}
while(even<=100)

// Question 3
let number = Number(prompt("Enter a number"))
let power = Number(prompt("Enter a power"))
let result = 1
let value = number
while(result != power){
    result++;
    value = number * value
}
console.log(value)

//Question 4
let row = Number(prompt("How many rows do you want?"))
let dots = 0;

let star = "*";

let star2 = star;

do{

    dots++;

    console.log(star);

    star = star + star2;

   

}while(dots != row);

// Question 5
let digit = Number(prompt("Enter in some numbers"))
let digit2 = 0

while(digit != 0){
    digit = Math.floor(digit / 10);
    digit2++; 
}
console.log(digit)

// Question 6
let userInput = Number(prompt("Please input a number for which the digits will be added"));
let dig = 0;
let Input = userInput;
while(userInput > 0){
    Input = userInput % 10;
    userInput = Math.floor(userInput / 10);
    dig = dig + Input;
}
console.log(dig);
