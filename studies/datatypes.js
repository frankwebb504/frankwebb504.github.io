// DATA TYPES

// Data types can be broken down into two catagories: simple and complex.

// Simple Data Types: number (5), string ('five'), boolean (true or false),
//     not a number (NaN), undefined (no value, uninitialized), and null
//     (no value).
//     They are immutable which means they do not hold or collect other values and
//     and operations on them return new simple values, they do not alter
//     the original value.
//     The are copied by value when assigning or passing from one variable to the next.
// Complex Data Types: objects, arrays, functions.
//     They aggregate other values and can be indefinite in size.
//     The are copied by reference when assigning or passing from one variable to the next.

// Becasue variables themselves have a fixed amount of memory, variables can
// hold the actual values of primitive types, but they hold only references
// to values of complex types. We often use the analogy that variables are named- buckets into
// which we put values of a particular type.

var age = 5;
// Above, we've put into the age variable the value of 5. which is of the 
// simple data type number.

var name;
console.log(name); //prints undefined because the variable has not been assigned to anything. undefined is a simple datatype
console.log(name + age); // when we try to do arithmetic operators with a variable that is not defined we get another data type, NaN
                        // (Not a Number). Here, age is defined as a number type (5), but name is undefined.
var food = null;
console.log(food + age); // null is another data type, but it is treated diffrently than undefined with arithmetic operators, it is treated
                        // like 0, so in this case the console prints 5 because food is treated like 0 and age is set to 5.

var nameFirst = 'Erika';
var fullName = nameFirst + ' Hebert'; //operations on simple data tyes return new simple data types
console.log(nameFirst); // prints the string 'Erika' because that is what the variable nameFirst is set to.
console.log(fullName); // prints 'Erika Hebert'

// In actuality, variables can only directly contain primitive values, which include
// Numbers, Boolean, null and undefined types. Variables can directly store simple types because simple types have a fixed size
//in memory.
//Complex types are indefinite in size. Arrays can be long as needed. An object can have any number of properties.
//Functions can encapsulate any number of statements.
var array = [1, 3, 3]; //example of an array of numbers, a complex data type
array.push(4, 5); //array method named push that adds values to the end of an array
console.log(array); //prints [1, 3, 3, 4, 5]

var object = {  //example of an object, another complex data type
    one: 'a',   //properties in the object which are stored in key/value pairs. key = 'one', value = 'a'
    two: 'b'
}
object.three = 'c';
console.log(object); //prints {one: 'a', two: 'b', three: 'c'}

var add = function(number1, number2) {return number1 + number2;} //example of another complex data type, functions. the variable is assigned to an
                                                                //anonymous function(function without a name). This method of function declaration
                                                                //is know as a function expression.
function subtract(number1, number2) {return number1 - number2;} //this is a named function. Not attacted to a variable, but can still be called with its name after the function keyword                                                                
console.log(add(age, 0)); //prints 5, because age is assigned to 5

//To further distinction between simple values and complex values they are stored
//and referenced by variables differently. Simples are copied by value, and complex are copied by reference.

//simple, copy by value:
var a = 1;
var b = a; //value in a is copied into b
b = 2; //changing the value at b does not effect what is stored in a
console.log(a); // prints 1

//complex, copy by reference:
var z = {one: 'foo'};
var y = z; //value stored in y is a reference to z, they both point to the same object
y.one = 'bar';
console.log(z.one); //prints 'bar'

//infinity
//     The global infinity property is a numeric value representing infinity. The value of infinity
//     (positive infinity) is greater than any other number. Mathematicall, this value behaves the same
//     as infinity, for example, any positive number multiplied by infinity equals infinity and
//     any number divided by infinity equals 0
var maxNumber = Math.pow(10, 1000); //max positive number

if (maxNumber === Infinity) {
    console.log("let's call it infinity"); //prints 'let's call it infinity'
}

console.log(Infinity) // prints Infinity
console.log(Infinity + 1) //prints Infinity
console.log(1 / Infinity) //prints 0

//Negative infinity works just like a negative number would mathmatically, but with infinity
console.log(-Infinity) // prints -Infinity
console.log(Infinity * -1) //prints -Infinity
console.log(-Infinity * -Infinity) //prints Infinity

































