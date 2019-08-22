// CONTROL FLOW

// Conditional statements allow us to control the flow of our application.
// We can manke decisions in our code by asking true or false questions.
// Based on the answer, we decide what code to run. Conditional statements
// are comparisons based on their truthyness or falseyness. Values will be 
// changed into a boolean. Conditional statements are eitherif else-if 
// statements, or switch statements.

// If else-if statements: To use this statement, start with the keyword if.
//  after that put in condition to check in parenthesis, followed by the block of code to run
//  if true in curly braces. each fallowing statement is stated with the keyword else if. You can also use
//  a default statement with no condition, just a block of code to run if all previous
//  conditions are false.  Also, once one of the conditions is reached, none of the following conditions
//  will be checked.

var maybe = 'yes'; 
if (maybe === 'no') {
    console.log('nope');
}                           //false so goes to next condition
else if (maybe === 'yes') {
    console.log(maybe);
}                           //true, so prints maybe to console
else {console.log('idk');}  // if both had been false, idk would have been logged to the console

//Switch statements: Uses the keyword switch

