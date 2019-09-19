// OPERATORS

// Operators act on our data, like assign them to a variable, comparing them, or including them
// in arithmetic operations. They are classified by what they do and how many operands they
// require. Operands are the values that operators act on. Unary operators only work with one value, binary with two
// and ternary with three. The types of operators are assignment, comparison, arithmetic, logical, string,
// conditional (ternary), unary.

//Comparison Operators: compare two values and evaluate to a boolean (true or false)
console.log (1 < 2); //true because 2 is greater than 1
console.log(4 < 2); //false becasue 4 is not less than 2

//Strict Comparison: takes into account the value and type
console.log(2 === 2); //true
console.log(2 === 'two'); //false

//Unary Operator:
var i = 1; //assignment operator, assigns 1 to i
console.log(typeof 1); //number
console.log(1 - 1); //0
console.log(!true); //bang operator, flips the truthiness of the statement
// Logical Operators: && (the and operator) both conditions must resolve to true, || (the or operator) either
//    condition can resolve to true, ! (the bang operator) flips the truthiness of the value.Accounts
console.log(1 < 2 && 1 > 0); //true because both coditions are true
console.log(1 < 2 && 1 > 4); //false because the second condition is false
console.log(1 < 2 || 1 > 0); //true because either one of the conditions are true
console.log(1 < 2 || 1 > 4); //true because the first condition is true, even if the second is not
console.log(1 !== 2); //true because the bang operator flips the truthiness of the equation. The is also strictly equal so the bang operator makes it
                        //strictly not equal

//Arithmetic Operators:
console.log(1 + 1); //addition operator, adds the number before and after and returns a number -> 2
console.log(1 - 1); //subtraction operator, subtracts the numbers before and after and returns a number -> 0
console.log(2 * 3); //multiplication operator, multiplies the numbers before and after and returns a number -> 6
console.log(6 / 2); //division operator, divides the number before by the number after and returns a number -> 3
console.log(15 % 5); //modulator operator, returns the remainder of division, 3

//Ternary operator: like a conditional statement. ex. condition ? expressionIfTrue : expressionIfFalse
var age = 29;
var beverage = (age >= 21) ? 'beer' : 'juice';
console.log(beverage); //prints beer because it was in the condition if true spot, and the condition of age being greater than
                        //or equal to 21 is true

var count = 1;
count++;            //++ adds one to the number. same as count + 1 -> 1; if ++ is before the number its acting on it will increment immediatly.
                    //If after it will pass the current value to some operation, then increment the value
console.log(count); //-> 2
count += count; //+= adds itself to itself and sets it as the new value same as count = count + count
console.log(count); //-> 4
count--;        //-- subtracts one from the number. same as count - 1
console.log(count); //-> 3
count *= 2 // multiplies and assigns the value to the result
console.log(count); //-> 6
count /= 3 //divides and assigns the value to the result
console.log(count); //-> 2
var hi = "hello"
hi += " wolrd"; //works for strings as well
console.log(hi); //prings "hello world"


