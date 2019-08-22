// DATA TYPES

// Data types can be broken down into two catagories: simple and complex.

// Simple Data Types: number (5), string ('five'), boolean (true),
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
// hold the actual values of primitive types, but they can hold only references
// to values of complex types. We often use the analogy that variables are named- buckets into
// which we put values of a particular type.
var age = 5;
// Above, we've put into the age variable the value of 5. which is of the 
// simple data type number.
var nameFirst = 'Erika';
var fullName = nameFirst + 'Hebert'; //operations on simple data tyes return new simple data types
console.log(nameFirst);
console.log(fullName);
// In actuality, variables can only directly contain primitive values, which include
// Numbers, Boolean, null and undefined types. Variables can directly store simple types because simple types have a fixed size
//in memory.
//Complex types are indefinite in size. Arrays can be long as needed. An object can have any number of properties.
//Functions can encapsulate any number of statements.
var array = [1, 3, 3];
array.push(4, 5);
console.log(array); //prints [1, 3, 3, 4, 5]

var object = {
    one: 'a',
    two: 'b'
}
object.three = 'c';
console.log(object); //prints {one: 'a', two: 'b', three: 'c'}

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




























