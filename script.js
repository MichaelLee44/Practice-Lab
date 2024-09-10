/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

//defining display are for the use of the rest of the tasks
const displayarea = document.querySelector(".display")

/*

//part 1 

//a
let numinp = parseInt(prompt("Please enter a number."))
displayarea.innerHTML = "Quantity: " + numinp 

//b
let percentinp = parseInt(prompt("Enter a percentage you wish to calculate."))
displayarea.innerHTML = percentinp + "% of " + numinp + " = " + ((percentinp/100)*numinp)
*/

/*
//part 2
let gradevalue = prompt("Enter your grade (1-100)")
gradevalue = parseInt(gradevalue)
displayarea.innerHTML = gradevalue

//a
if (gradevalue >= 91) {
    displayarea.innerHTML+=(' is a grade of A')
} else if (gradevalue >= 81) {
    displayarea.innerHTML+=(' is a grade of B')
} else if (gradevalue >= 71) {
    displayarea.innerHTML+=(' is a grade of C')
} else if (gradevalue >= 61) {
    displayarea.innerHTML+=(' is a grade of D')
} else {
    displayarea.innerHTML+=(', wow really? You failed.')
}

//b

switch(true) {
    case gradevalue >= 91:
        displayarea.innerHTML+=(' is a grade of A')
        break;
    case gradevalue >= 81:
        displayarea.innerHTML+=(' is a grade of B')
        break; 
    case gradevalue >= 71:
        displayarea.innerHTML+=(' is a grade of C')
        break; 
    case gradevalue >= 61:
        displayarea.innerHTML+=(' is a grade of D')
        break;
    case gradevalue <= 60:
        displayarea.innerHTML+=(', wow really? You failed.')
        break;  
} */

/*
//part 3

//gather inputs
let professor = prompt("Which professor is trying to punish you?")
let sentence = prompt("What sentence are you required to write?")
let sentrynum = parseInt(prompt("How many times must you write this?"))
alert("Very well, Sententia Iterum")

//for loop
displayarea.innerHTML = ""
for(let i=0; i<sentrynum; i++) {
    displayarea.innerHTML+=`${i+1}. ${sentence} ${professor}. <br>`
}
*/

/*
//part 4

//gather inputs
let professor = prompt("Which professor is trying to punish you?")
let sentence = prompt("What sentence are you required to write?")
let sentrynum = parseInt(prompt("How many times must you write this?"))
alert("Very well, Sententia Iterum")

displayarea.innerHTML = `<ul> ${professor} </ul>`

//while loop
let i = 0
while(i<sentrynum) {
    displayarea.innerHTML+=`<li> ${i+1} ${sentence}`
    i++
}
*/

/*
//part 5

//gather inputs
let professor = prompt("Which professor is trying to punish you?")
let sentence = prompt("What sentence are you required to write?")
let sentrynum = parseInt(prompt("How many times must you write this?"))
alert("Very well, Sententia Iterum")

displayarea.innerHTML = `<ul> ${professor} </ul>`

let newline = (prof, sent, numval) => {
    return "<li>" + numval + " " + sent + ".</li>"
}

//while loop
let i = 0
while(i<sentrynum) {
    displayarea.innerHTML+=newline(professor, sentence, i+1)
    i++
}
*/

//part 6

//1
/*
displayarea.innerHTML = "------------<br></br>"
for(let factor1=0;factor1<12;factor1++) {
    for(let factor2=0;factor2<12;factor2++) {
        displayarea.innerHTML+=factor1 + " x " + factor2 + " = " + (factor1+1)*(factor2+1) + "<br> </br>"
    }
    displayarea.innerHTML+="------------<br></br>"
} */

//2
/*
function createTables(factor) {
    for(let i=0;i<12;i++) {
        displayarea.innerHTML+=factor + " x " + parseInt(i+1) + " = " + factor*(i+1) + "<br> </br>"
    }
    displayarea.innerHTML+="------------<br></br>"
}

displayarea.innerHTML = "------------<br></br>"
for(let i=0;i<12;i++) {
    createTables(i)
}
*/

//3
/*

//function to create and display a times table for a factor
function createTables(factor) {
    for(let i=0;i<12;i++) {
        displayarea.innerHTML+=factor + " x " + parseInt(i+1) + " = " + factor*(i+1) + "<br> </br>"
    }
    displayarea.innerHTML+="------------<br></br>"
}


displayarea.innerHTML = "------------<br></br>"

//function creates a list of times tables between 1 and the number parameter 'factor'
function timesTables(factor) {
    
    //calls the createTables function 'factor' times
    for (i=0;i<factor;i++) {
        createTables(i+1)
    }
}

//call timesTables
timesTables(12)
*/

//part 7

/*
    Hoisting is a unique behavior in Javascript
    where a variable or function can be called before
    declared. With functions, only an arrow function
    can be hoisted. With variable type values, a
    variable can only be hoisted with a declared
    value if the variable is declared with var. If it
    is not declared with var, like with const or let 
    for example, it will inherit false/null value/ be
    hoisted as false/null.
    
    Tangent: It actually reminds me of 
    a language/compiler that I recently taught myself 
    called GlovePIE, which is Javascript based. GlovePIE
    is an iterative compiler so it compiles repeatedly like 
    a loop until a button/key is used to stop the 
    compilation of the code. Since it is iterative,
    a variable can be referenced before declaration
    or without being declared at all but it only 
    inherits the value of false/NULL
    therefore a GlovePIE statement like the following:

   1 if not var.numval {
   2     //
   3 }

    In the GlovePIE line above, features the 
    reference of a nonexistant variable 
    in the first line.
*/

//function hoisting
sayAlert()

function sayAlert() {
    alert("Hello")
}

//variable hoisting
stringval = "hello"
alert(stringval)

var stringval;

/*
Hoisting has alaready existed as a feature 
since the inception of javascript, but it 
was not given a name by ECMA (standards
organization) until 2015.
*/