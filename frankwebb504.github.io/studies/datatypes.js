/*Datatypes
Simple/ Primitive Data
Number - Numeric Data
String - Character Data
Boolean - true or false
NaN - Not A Number
null - no value, nullified by a programmer
undefined- no value, uninitialized

Complex Data
Array - list of values
Object - data made up of key/ value pairs
Function - method that acts on perameters given and returns data

Infinity and -Infinity (Google them if you don't know!)
What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/
Primitives are copied by value:
var a = 1;
var b = a; //the value in a is copied into b
b = 2; //changing the value at b doesn't effect what is stored in a
console.log(a); //prints 1

Complex Data is copied by reference:
var a = {one: 'foo'};
var b = a //here the value in b is a reference to a, they both point to the same object
b.one = "bar";
console.log(a.one) //prints "bar"

