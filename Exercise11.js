// Question 1
let Array1 = [];
Array1[0] = 1
Array1[1] = -23
Array1[2] = 3
Array1[3] = 42
Array1[4] = 75
Array1[5] = 6
Array1[6] = -7
Array1[7] = 81
Array1[8] = -69
Array1[9] = 102
Array1[10] = -11

// Question 2
 document.write(Array1)
 document.write("<br>")
// Question 3
for(let beans=0;beans<11;beans++){
    Array1[beans]=Array1[beans];
    if(Array1[beans]<0){
        document.write(Array1[beans])
        document.write("<br>")
    }
}document.write("<br>")

// Question 4
document.write(Array1[0]+Array1[1]+Array1[2]+Array1[3]+Array1[4]+Array1[5]+Array1[6]+Array1[7]+Array1[8]+Array1[9]+Array1[10])
document.write("<br>")
document.write("<br>")

// Question 5
maximum = 0
minimum = 0
for(let warm_toast = 0; warm_toast<Array1; warm_toast++){
    Array1[warm_toast] = Array1[warm_toast]
    if(Array1[warm_toast] > maximum){
        maximum = Array1[warm_toast]
    }
    else if(Array1[warm_toast < minimum]){
        minimum = Array1[warm_toast]
    }
}
document.write(minimum)
document.write("<br>")
document.write(maximum)
document.write("<br>")
// Question 6
let sl = 0
for(let jaffa_cakes = 0; jaffa_cakes<Array1; jaffa_cakes++){
    Array1[jaffa_cakes] = Array1[jaffa_cakes]
    if(Array1[jaffa_cakes] != maximum && Array1[jaffa_cakes] > sl){
        sl = Array1[jaffa_cakes]
    }
}
document.write(sl)
document.write("<br>")
// Question 7
let odd = 0
let even = 0
for(let mashed_potatoes=0;mashed_potatoes<11;mashed_potatoes++){
    Array1[mashed_potatoes]=Array1[mashed_potatoes];
    if(Array1[mashed_potatoes] % 2 == 0){
        even++;
    }
    else if(Array1[mashed_potatoes] % 2 != 0){
            odd++;
    }
}
document.write("There are ", even," even numbers and ",odd," odd numbers.")
document.write("<br>")

// Question 8
let abacus = []
let stew = Array1
for(let stew=0;stew<11;stew++){
    Array1[stew]=Array1[stew];
    abacus.push(Array1[stew])
}
document.write(abacus)
document.write("<br>")

// Question 9
Array1.push(2376)
document.write(Array1[11])
document.write("<br>")
// Question 10
Array1.pop();
document.write(Array1)