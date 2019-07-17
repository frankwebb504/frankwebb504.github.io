// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
if (typeof base === "number") {
    return m => m > base;
    let x;
   let greaterThanX = createGreaterThanFilter(x);
   console.log(greaterThanX(base));
}   
    
else if (typeof base === "string") {
    return m => m > base;
    let x;
   let greaterThanX = createGreaterThanFilter(x);
   console.log(greaterThanX(base));
}  

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
if (typeof base === "number") {
    return m => m < base;
    let x;
   let lessThanX = createLessThanFilter(x);
   console.log(lessThanX(base));
}   
    
else if (typeof base === "string") {
    return m => m < base;
    let x;
  // let lessThanX = createLessThanFilter(x);
//   console.log(lessThanX(base));
}  

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

 return function check(x) {
     if (x.charAt() === startsWith.toUpperCase()) {
       return true;
       }
     else if (x.charAt() === startsWith.toLowerCase()) {
       return true;
       }
     
     else return false;
 };
 

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  return function check(x) {
     if (x.charAt(x.length -1) === endsWith.toUpperCase()) {
       return true;
       }
     else if (x.charAt(x.length -1) === endsWith.toLowerCase()) {
       return true;
       }
     
     else return false;
 };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
      let newArray = [];
  
    for (let x = 0; x < strings.length; x ++) {
       let myString = modify(strings[x]);
       newArray.push(myString)
    }
   console.log(newArray);
    return newArray;
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    let counter = 0;

    for (let x = 0; x < strings.length; x ++){
      if (test(strings[x])){
      }
      else if (!test(strings[x])){
        counter++;
      }
    }
    return counter <= 0;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}