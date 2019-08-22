// LOOPS

// Loops are built-in features of JavaScript that allow us to execute a block
// of code as many times as needed. They are particularly handy for iterating
// over collections of data. In doing so, we can pull out the values of a collection
// to work with them, one by one. There are 3 types of loops: the for loop, the for in loop,
// and the while loop.

// For Loop: these loops require a starting point, an ending point, and how much the loop
//     will increment by each time.
var array = ['a', 'b', 'c'];
for (let x = 0; x < array.length; x++) {
    console.log(array[x]);
}   

// For-In Loop: these are loops designed to be used on objects. They pull out the
//     keys of an object. You can only use bracket notation to access the properties.
//     If you use dot syntax, the program will look for a specific key with that exact
//     name.
var object = {
    key1: 'value1',
    key2: 'value2'
}
for (var key in object) {
    console.log(object[key]);
}    

// While Loop: these loops use the while keyword followed by a condition that will
//     end the loop. You can set up your incrementer inside the body.
var count = 0;
while(count < 10) {
    console.log(count);
    count ++;
}    