/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
//We can use three different keywords to declare variables: var, let, and const.

//Var: hoisted to top of page, but not its assignments and reassignments. It is reassignable.
console.log(fruit); //prints undefined because the name fruit is hoisted above the console log, but not the value assigned to it.
var fruit = 'apple';
fruit = 'orange';
console.log(fruit); //prints orange now because the var keyword lets us reassign the variable to something different.
//Not scoped to conditional statements or loops.


//Let: not hoisted, but also reassignable. Variables declared with let are scoped to conditional statements and loops.
console.log(vegatables); //throws reference error because the the name of the variable cannot be referenced until it is defined.
let vegatables = 'carrots';
vegatables = 'peas';
console.log(vegatables); //prints peas now because let lets us reassign the value initially decared

//Const: Also not hoisted, and not reassignable. Scoped to conditional statements and loops.
console.log(desserts); //throws reference error because the the name of the variable cannot be referenced until it is defined.
const desserts = 'cake';
desserts = 'cookies';
console.log(desserts); //prints error because the variable can not be reassigned

//All three types are scoped to functions.
//Hoisting just means that the variable declarations are lifted to the top of the code on the page. Their assignments are not.
//If you try to access the date assigned beforehand it will be undefined instead of throwing a reference error.
















