/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function takes animals (array) as first property, and a name (string) as second property
function search(animals, name) {
//to search through the array we need a loop    
for (let i = 0; i <= animals.length - 1; i ++) {
//now we need a conditional since we are looking for a specific name    
    if (animals[i]['name'].toLowerCase() === name.toLowerCase()) {
        return animals[i];
    }
}
//exits loop after all objects searched and none returned, so returns null
return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function will be wimular to splice, can take 3 arguments
function replace(animals, name, replacement) {
//need to loop through the array to look for a specific name
    for (let i = 0; i <= animals.length - 1; i++) {
//conditional to find the name
        if (animals[i]['name'].toLowerCase() === name.toLowerCase()) {
//splice method works perfect for replaceing if name found
            animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function will be just like search, but instead of returning the object, it will reomove it
function remove(animals, name) {
//to search through the array we need a loop    
for (let i = 0; i <= animals.length - 1; i ++) {
//now we need a conditional since we are looking for a specific name    
    if (animals[i]['name'].toLowerCase() === name.toLowerCase()) {
        animals.splice(i, 1);
    }
}    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
//need to search to make sure animal object has a name and species property
if (animal.name.length > 0 && animal.species.length > 0) {
//now we loop to makes sure no other animals with that name exist
for (let i = 0; i <animals.length - 1; i ++) {
    if (animals[i]['name'].toLowerCase() === animal['name'].toLowerCase()) {
        return;
    }
}
}
return animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
