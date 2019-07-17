/*
Loops
Explain while, for, and for-in loops
For Loops
For loops have a starting condition, a stopping condition, an incremator, and code to run while the loop runs.
ex. for (let x = 0; x < 101; x++) {
    console.log(x);
}

For-in Loops
For- in loops loop over an array. It pulls out all of the keys in an object
for (var key in person) {
    console.log(person[key]);
}

While Loops
While loops use the keyword while. Then in parenthesis, states a condition that while true will continue to execute
the block of code in the body of the while-loop.
ex.
var count = -1;
while(count < 10) {
    console.log(count);
    count++;
}

Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
var myArr = [];
for (let x = 0; x <= myArr.length ; x++) {
    console.log(x);
}

Loop over an Array, forwards and backwards
for (let i = myArr. length; i <= 0; i--) {
    console.log(i);
}

Loop over an ObjectS
var myObj = {
    key 1: "a"
    key 2: "b"
};
for (var key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

*/