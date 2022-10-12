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
