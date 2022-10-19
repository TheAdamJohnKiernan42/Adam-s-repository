// Question 1
let n = Number(prompt("Enter a number:"))
let m = 1
for(;m<=n;m=m+2){
    console.log(m)
}

// Question 2
let number = Number(prompt("Enter a number:"))
let ans = 0;
for(let factorial = number-1; factorial>0; factorial = factorial-1){
    ans = number * factorial;
    number = ans;
}
console.log(ans);

// Question 3

let guess = 42069420
let guessamount = 3
for(let limit = 0; limit<4; limit++){
    let userChoice = Number(prompt("Enter a number:"))
    
    if(userChoice == guess){
        console.log("No way you guessed that")
        break;
    }
    else{
        console.log("Try again")
        console.log("You've got",guessamount,"guesses left")
        guessamount = guessamount - 1
    }
}

// Question 4
let number1 = Number(prompt("Enter a number:"))
let ans1 = 0;
for(let factorial1 = number1-1; factorial1>0; factorial1 = factorial1-1){
    ans1 = number1 + factorial1;
    number1 = ans1;
}
console.log(ans1);

