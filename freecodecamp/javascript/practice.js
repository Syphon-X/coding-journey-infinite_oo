
/* Used for Practice */

// function calcSum(x, y){
//     let sum = x + y;
//     return sum;
// }

// console.log(calcSum(3, 4));


// let exArray = [1, 2, 3, 4, 5];
// exArray.push(8, 9);
// console.log(exArray);

// exArray.shift();
// exArray[0] = 10;
// exArray.unshift(88);
// console.log(exArray);


// Closure  inner functions have access to things in the outer scope.  When the outfunction is done, the inner function saves the variables that were first used, so that you can continue to call on it but not vice versa.  i.e child has access to parent and global scopes, but parent doesn't have access to childs.

// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is a creted when we define a function, not when a funcion is executed.

let createCounter = function(x) {

    return function(y) {
        return x + (2 * y);
    }
}

const counter = createCounter(10);

console.log(counter(5));
console.log(counter(10));
console.log(counter(20));



// Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

  // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     if (value === "") {
//         delete records[id][prop];
//     }   else if (prop !== 'tracks' && value !== "") {
//             records[id][prop] = value;
//     }   else if (prop === 'tracks' && value !== "") {
//             if (records[id].hasOwnProperty('tracks') === false) {
//                 records[id][prop] = [];
//             }
//             records[id][prop].push(value);
//     }
//     return records;
// }
// result = updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// console.log(result);

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//     total += myArr[i];
// }

// console.log(total);


// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }


//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }

// Setup
// const contacts = 
// [
//     {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];

// function lookUpProfile(name, prop) 
// {
//     // Only change code below this line
//     for (let x = 0; x < contacts.length; x++)
//         if (contacts[x].firstName === name)
//             if (contacts[x].hasOwnProperty(prop))
//                 return contacts[x][prop];
//         else
//             return 'No such property';
//     return 'No such contact';
//     // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile('Vos', 'number'));



// function randomRange(myMin, myMax) 
// {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// let myRandom = randomRange(0, 10);
// console.log(myRandom);