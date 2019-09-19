// CONTROL FLOW

// Conditional statements allow us to control the flow of our application. 
// We can make decisions in our code by asking true or false questions. Based on the answer,
// we decide what code runs if the question is true, and what code runs if the question is false.
// We do this using if statements and if-else chain statements, as well as switch statements.

// If Else-If: starts with the keyword if followed by a statement o be evaluated to true or false
if (2 === 'two') {
//then we put a block of code to run if it is true
    console.log('these are the same type of two');
}
//after using if as the first keyword, we must use the else if keyword for the following conditions
//you can use as many else if statements as needed
else if (2 === 2) {
    console.log('these are the same two');
}
//if all the conditions fail we can use a default statement that will run. it does
//not need and condition to test, just a block of code to run
else {console.log("must not be any two's")}

//Switch Statements: Switch statements evaluate an input expression, matching
//the expression's value to a case clause, and executes statements associated with that case.
//A break statement should end the case.

var color = 'green';

switch (color) {
    case 'blue' : console.log('the color is blue');
//have to include a break statement before you begin the next case    
    break;
    case 'green': console.log('the color is green');
    break;
//you can add as many cases as you want a particular block of code to run for    
    case 'red':
    case 'yellow': console.log('these color is warm');
    break;
//the default statement for case statements uses the keyword default    
    default: console.log('color provided is not recognized');
}



