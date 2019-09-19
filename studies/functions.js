// FUNCTIONS

// Functions allow us to encapsulate a block of code, and execute it whenever we want
//     and how ever many times we want. The two phases of functions are first declaration and then exectution or calling the function.
// Declaring Functions: The keyword to declare a function is function. You can also assign an anonymous function
//     (a function without a name) to a variable. This is called a function expression.
//     During the function declaration, we may or may not give it parameters. These are placeholders for when the
//     function is called and should describe the data we are looking to be used.
//     Inside the body of functions, use the keyword return if you wish to return any data
//     meaningful to the code. This is known as the output of the function. Once the word return is used,
//     the function ends, whether a loop has finished or not.
   function add(num1, num2) {
        return num1 + num2;
    } //declaration of a named function
    var sub = function(num1, num2) {
        return num1 - num2;
    } // declaration of a function expression. function is assigned to the variable sub

// Calling functions: to use a function, we have to call it. When we declare the function, those names in the parenthesis are called
//     parameters. When we call the function, we put actual values into the parenthesis called arguments. In the example, we know the arguments
//     need to be a numeric value type so we would pass those in to get a meaningful answer.
add (1, 2); //function call. arguments are 1 and 2. the result is 3
sub (5, 1); //function call. arguments are 5 and 1. the result is 4
// Scope: Functions have parent child scope, meaning they can reference or alter variable in the outer or global scope.
//     but not vice versa. If we use a function inside of another function, it has access to its own variables, the outerfunctions variables, and the
//     global variables, but not vice versa. This is known as a closure. We can think of this relationship as parent child relationship.
//     The functions that contain other functions are the parents, and the ones inside are the children. The children always have access to the parents
//     variables but the parents can not access their childrens' variables.

function makePerson(nameFirst, nameLast) {
    var friends = [];

return {
    nameFirst: nameFirst,
    nameLast: nameLast,
    addFriends: function() {
        Array.prototype.push.apply(friends, Array.prototye.slice.call(arguments));
    },
    getNumFriends: function() {
        return friends.length;
    },
    getFriendsNames: function() {
        return friends.map(function(friend) {
            return friend.nameFirst + ' ' + friend.nameLast;
        })
        .join(", ");
    }
}
};
//     Above, when invoking makePerson(), the inner Function definitions of addFriends(), getNumFriends(), getFriendNames()
//     form closures that carry with them a reference to the array stored in the friends variable. The inner functions, addFriends(), getNumFriends(),
//     getFriendNames() have references to the scope outside of them, makePerson().

var john = makePerson('John', 'Fraboni');
var alice = makePerson('Alice', 'Green');
var greg = makePerson('Greg', 'Bara');
john.addFriends(greg, alice);
console.log(john.getFriendNames());

//     Above, when we keep the person-object returned from the call to
//     makePerson() in a variable, for example, john, we've created a private
//     member. The friends array is available only through the API of the person-object.
//     Client code does not have direct access to the friends array, but as you can see, it is alive.
















