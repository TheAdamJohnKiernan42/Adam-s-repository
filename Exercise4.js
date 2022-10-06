let x = Math.floor(Math.random() *3)+1;
userChoice = Number(prompt("Choose a number between 1 and 3"))
switch(x){
    case 1:
        x = "Rock"
        if(userChoice == 1){
            console.log("Draw")
        }
        else if(userChoice == 2){
            console.log("Win")
        }
        else if(userChoice == 3){
            console.log("Lose")
        }
        break;
    case 2:
        x = "Paper"
        if(userChoice == 1){
            console.log("Lose")
        }
        else if(userChoice == 2){
            console.log("Draw")
        }
        else if(userChoice == 3){
            console.log("Win")
        }
        break;
    case 3:
        x = "Scissors"
        if(userChoice == 1){
            console.log("Win")
        }
        else if(userChoice == 2){
            console.log("Lose")
        }
        else if(userChoice == 3){
            console.log("Draw")
        }
        break;
}
console.log(x)
console.log(userChoice)

let level = prompt("Did you do Higher Level or Ordinary Level?")
let grade = prompt("What grade did you get?")

switch(level){
    case "Higher":
        switch(grade){
            case "H1":
                console.log("You got ")
        }
            
        
}

