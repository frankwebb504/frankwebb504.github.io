// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-frankwebbb');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./frankwebb504.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, function(obj) {
        if (obj.gender === 'male') {
            return true;
        }
    }).length;
};

var femaleCount = function(array) {
    // _.reduce(array, function(seed, element, index) {
    //     if (element.gender === 'female') {
    //         seed += 1;
    //     }
    // }, 0);
    // };
    return _.filter(array, function(obj) {
        if (obj.gender === 'female') {
            return true;
        }
    }).length;
};
var oldestCustomer = function(array) {
    let oldest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldest.age) {
            oldest = array[i];
        }
    }
    return oldest.name;
};

var youngestCustomer = function(array) {
    let youngest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < youngest.age) {
            youngest = array[i];
        }
    }
    return youngest.name;
};

var averageBalance = function(array) {
    let totalBal = 0;
    for (let i = 0; i < array.length; i++) {
        array[i].balance = array[i].balance.replace(',', '');
        array[i].balance = array[i].balance.replace('$', '');
        totalBal += parseFloat(array[i].balance);
    }
    let avgBal = totalBal / array.length;
    return avgBal;
};

var firstLetterCount = function(array, letter) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
            count += 1;
        }
    }
    return count;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array[j].friends.length; i++) {
            if (array[j].name === customer) {
                if (array[j].friends[i].name[0].toLowerCase() === letter.toLowerCase()) {
                    count += 1;
                };
            }
        }
    }
    return count;
};

var friendsCount = function(array, name) {
    let friends = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                friends.push(array[i].name);
            }
        }
    }
    return friends;
};



// // function each(collection, func) {
//     var topThreeTags = function(array) {
//         if (Array.isArray(collection)) {
//             for (let i = 0; i < collection.length; i++) {
//                 func(collection[i], i, collection);
//             }
//         }
//         else {
//             for (let key in collection) {
//                 func(collection[key], key, collection);
//             }
//         }
//     }


    var topThreeTags = function(array) {
        let allTags = [];
        _.each(array, function(element, index, array) {
            if (element.tags) {
                allTags.push(element.tags);
            }
        })
        let allTagsMerg = [].concat.apply([], allTags);
        //console.log(allTagsMerg);
        var first = 2; //default maximum frequency
        var second = 1;
        var third = 0;
        var m = 0; //counter
        var firstItem; //to store item with maximum frequency
        var secondItem;
        var thirdItem;
        for (var i = 0; i < allTagsMerg.length; i++) //select element (current element)
        {
            for (var j = 0; j < allTagsMerg.length; j++) //loop through next elements in array to compare calculate frequency of current element
            {
                if (allTagsMerg[i] === allTagsMerg[j]) //see if element occurs again in the array
                    m = m + 1; //increment counter if it does

                if (m > first) //compare current items frequency with maximum frequency
                {
                    first = m; //if m>mf store m in mf for upcoming elements
                    firstItem = allTagsMerg[i]; // store the current element.
                }
                else if (m > second && allTagsMerg[i] !== firstItem) {
                    second = m;
                    secondItem = allTagsMerg[i];
                }
                else if (m > third && allTagsMerg[i] !== secondItem && allTagsMerg[i] != firstItem) {
                    third = m;
                    thirdItem = allTagsMerg[i];
                }


            }
            m = 0; // make counter 0 for next element.
        }
        // console.log(firstItem);
        // console.log(secondItem);
        // console.log(thirdItem);
        let topThree = [firstItem, secondItem, thirdItem];
        return topThree;
    }




    var genderCount = function(array) {
        let genderObj = {
            male: 0,
            female: 0,
            'non-binary': 0
        };
        for (let i = 0; i < array.length; i++) {
            if (array[i].gender === 'male') {
                genderObj.male += 1;
            }
            else if (array[i].gender === 'female') {
                genderObj.female += 1;
            }
            else if (array[i].gender === 'non-binary') {
                genderObj['non-binary'] += 1;
            }
        }
        return genderObj;
    };

    //////////////////////////////////////////////////////////////////////
    // DON'T REMOVE THIS CODE ////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    // here, export any references you need for tests //
    module.exports.maleCount = maleCount;
    module.exports.femaleCount = femaleCount;
    module.exports.oldestCustomer = oldestCustomer;
    module.exports.youngestCustomer = youngestCustomer;
    module.exports.averageBalance = averageBalance;
    module.exports.firstLetterCount = firstLetterCount;
    module.exports.friendFirstLetterCount = friendFirstLetterCount;
    module.exports.friendsCount = friendsCount;
    module.exports.topThreeTags = topThreeTags;
    module.exports.genderCount = genderCount;
