/*
Functions
The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
First you must declare a function, and define it. Then we can call or apply the function.
What’s the difference between a function’s parameters and arguments PASSED to a function?
A functions parameters are used when the function is declared. They are placeholders for what date will be actually used when the function is called.
A functions arguments are what data is plugged into the function to be evaluated once the function is called.
What’s the syntax for a NAMED function?
function fulleName(a, b) {
    return (a + " " + b);
}
How do we assign a function to a variable?
We can assign a function to a variable by naming the variable and setting it to the function.
ex.
var add = function(a, b) {return a + b}
Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
Inputs are stated within paranthesis and are the parameters/ arguments of the function. Outputs go in brackets after the parameter and use the "return" keyword.
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced),
that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!)
(ALSO, see: Understanding JavaScript Closures with Ease)

*/