/*
Control flow
The control structures within JavaScript allow the program flow to change within a unit of code or function.
These statements can determine whether or not given statements are executed, as well as repeated execution of a block of code.

If
Begins a conditional statement. can only be used once per statement.
ex.
if (condition that will resolve true or false) {
    if true, a block of code here will run. can include another conditional statement;
}

Else-if
If the if statement is false, the computer checks the next statements, the else-if statements. there can be unlimited number of it statements.
If any of them return true, the computer runs the block of code in that statment and exits the conditional.
ex.
else if (condition to be met) {
    block of code to run if statement is true
}

Else
The last statement of the conditional. Runs if all if and else if statements return false.
ex. else {do this block of code}

Switch
Case statement that is used to execute various actions for various conditions or variable states. Uses strict comparisons. Values must be the same type to match.
ex. switch(expression) {
    case value:
    expression;
    break;
    case value:
    expression;
    break;
    default:
    expression;
}
*/