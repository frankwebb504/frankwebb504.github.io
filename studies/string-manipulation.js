// STRING MANIPULATION

// You can manipulate strings using operators or methods built into javascript.

// Operators: you can concatenate two strings together using the '+' operator
var hello = 'hello';
var world = 'world';
var helloWorld = hello + ' ' + world; //you can add or concat two strings together with the addition operator
console.log(helloWorld); // 'hello world'

//String Methods:
console.log(helloWorld.slice(6, 11)); //slice( startPosition, endPosition), starts at the indexed postion in the string. 
                                        //the second number is the indexed postion in the string it will stop at. it will print everything inbetween -> world
console.log(helloWorld.toUpperCase()); //capitalizes all letters in word -> HELLO
console.log(helloWorld.toLowerCase()); //prints all letters in word in lower case -> hello
console.log(helloWorld.charAt(0)); //prints the character at the indexed position in parenthesis -> h

//you can access the string position like you would an array as well
console.log(hello[1]); //same as charAt method. strings are zero idexed meaning they start counting at 0,  thus the 
                        // 1 position will print the 2nd letter in the string -> e
                    