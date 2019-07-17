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
function search(animals, name) {
    for (let x = 0; x <= animals.length -1; x++) {
        if (name === animals[x]["name"]) {
            return animals[x];
        }
        
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
        for (let x = 0; x <= animals.length -1; x++) {
        if (name === animals[x]["name"]) {
            return animals[x] = replacement;
        }
        
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
     for (let x = 0; x <= animals.length -1; x++) {
        if (name === animals[x]["name"]) {
            return animals.splice(x, 1);
        }
        
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
     for (let x = 0; x <= animals.length -1; x++) {
        if (animal["name"].length > 0
        && animal["species"].length > 0) {
        
         if (animal["name"] === animals[x]["name"]) {
            
        }
        else if () {animals.push(animal)}
}
}
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


