// ---------- JavaScript Basics from freecodecamp ---------- //

/* This is a multi-lined comment
To have any edits show up with your code, remember to save!! */


console.log("Hello World!");

// --------------------- Variables --------------------- //
// To create a variable you can use Var, Let, Const :: They should be in standard camelCase 

var myVar = 5;
var myString = "Ted Chow";
myvar_type = typeof(myVar);
mystring_type = typeof(myString);

console.log(myVar);
console.log(myvar_type, mystring_type);

// i++ is the same as saying i = i + 1 ####  i-- is equal to i = i - 1 

let myNum = 87;
myNum++;
console.log(myNum);

// += or -= or *= or /= will combine your syntax in what is known as compound assignment //

let myNum2 = 1;
myNum2 += 5;
console.log("This is the result of compound assignment: " + myNum2);

// ------------------------- Escape Sequences ------------------------- //
// escape is designated by the \ backslash in front of the quote. 

console.log("I am a \"double quoted\" string inside \"double quotes\".\n")

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine \n"
console.log(myStr)

// concatenating strings with the += operator 

let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence.\n";
console.log(myStr2);

// ------------------------- Template Literals ------------------------- //
// **** Template literals are the F-string equivalent in python, denoted by the backtick ` and ${variable}. **** //

console.log("---------- Template Literals -----------\n")
const myName = "Ted";
const age = 35;
console.log(`Hello, my name is ${myName}, I am ${age} years old. \n`);

// Finding the length, you would have .length ### similar to len in python 

console.log("Hello World!".length)

/* Bracket notation to find a specific element within an index starting from 0 
string values are immutable, therefore you cannot index change an element within the string, but you can change the entire value if overwritten through variable reassignment. */

let testBracket = "";
let testName = "Ted";
testName = "Ned";  // variable reassignment //

testBracket = testName[0];
let testBracketNth = testName[testName.length -2];  // bracket notation of Nth //
console.log(`${testBracket}, ${testBracketNth} \n`);

// --------------------- Arrays also known as Lists ------------------------ //

console.log('-------- Arrays ---------\n')
const nameArray = ['Ted', 35];
const multiDimensionalArray = [['Ted', 35], ['Elaine', 38]];

const myArray = [50, 60, 70];
let myData = myArray[0];  // you can using indexing for arrays //

const myArray2 = [18, 64, 99];
myArray2[0] = 45;  // arrays are mutable //
console.log(myArray2);

//
const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData2 = myArray3[3][0][1]; // multi=dimensional array is an array of arrays //
console.log(`${myData2}`);

//
const arr1 = [1, 2, 3];
arr1.push(4, 5);   // push is essentially append, will add next array onto existing array //
console.log(arr1);

const arr2 = [["John", 23], ["cat", 2]];
arr2.push(["dog", 3]);
console.log(arr2);

//
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();   // .pop() removes the last element within the array //
console.log(oneDown);
console.log(threeArr);

//
const ourArray = ["Stimpson", "J", ["cat"]];
const shiftedArray = ourArray.shift();   // .shift() removes the first element within the array //
console.log(`This is the shifted element: ${shiftedArray}, \nand this is the leftover array: ${ourArray.join(", ")}`);   // .join creates the separator, in this case the comma //

//
const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
ourArray2.unshift("Happy");   // .unshift() adds the element to the beginning of the array //
console.log(ourArray2);


// ------------------------------- Functions ------------------------------- //

console.log("\n-------------Functions-----------------")
function functionName() {
    console.log("Hello World");
}

functionName();

//
function functionWithArgs(param1, param2) {
    console.log(param1 + param2)
}

functionWithArgs(1, 2);

//
function timesFive(num) {
    return num * 5;  // a return statement will a value back out of a function //
}

const answer = timesFive(5);
console.log(answer);

//
function myTest() {
    const localVariable = "foo";
    console.log(localVariable);
}

myTest();
// console.log(localVariable);   this line will cause an error because localVariable is not a global //

//
const exVar = "Hat";
function myFun() {
    const exVar = "Head";
    return exVar;
}
let answer2 = myFun();
console.log(answer2);   // the function will return the string Head because the local version of the variable is present //

// storing value with the assignment operator
function sum1(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let ourSum = sum1(5, 12);
console.log(ourSum);

// stand in line example
function nextInLine(array, item) {
    array.push(item);
    let removed = array.shift();
    return removed;
}

let answer3 = nextInLine([1, 2, 3, 4, 5], 6);
console.log(answer3);

// ------------------------------- Conditional If/Else ------------------------------- //

console.log("\n--------------Conditionals--------------")
//True/False Boolean conditional statement
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

let answer4 = trueOrFalse(false);
console.log(answer4);

/* Type Coercion == Comparing two different data types
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true 
*/
function equalTest(num1) {
    if (num1 == 10) {
        return "Equal";
    }
    return "Not Equal"
}

let answer5 = equalTest(10);
console.log(answer5);

// strict equality === does not provide a data type conversion unlike Type Coercion
3 === 3 // is true
3 === '3' // is false


// --------------------- Comparison ------------------------- //

console.log("----------------- Comparison ---------------------")

// logical and operator &&

function amprasan(num) {
    if (num > 5 && num < 10) {
        return "Yes";
    }
    return "No";
    }

let answer6 = amprasan(6);
console.log(answer6);

// logical or operator ||

function exOr(num) {
    if (num > 10 || num < 5) {
        return "No";
    }
    return "Yes"; 
    }

// If/Else Statements

function testElse(num) {
    if (num > 10) {
        return "Bigger than 10";
  } else {
        return "10 or Less";
  }
}

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(3));

// Golf Game using comparisons and if/else statements
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
        } else if (strokes <= par - 2) {
            return names[1];
        } else if (strokes === par - 1) {
            return names[2];
        } else if (strokes === par) {
            return names[3];
        } else if (strokes === par + 1) {
            return names[4];
        } else if (strokes === par + 2) {
            return names[5];
        } else {
            return names[6];
        }

}

console.log(golfScore(5, 4));

// --------------------- Switches ----------------------- //
/* Switches could be used as a cleaner/alternative way to do If/Else Statements */

console.log('----------- Switches -------------\n')
// If you need to match one value against many options
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer = "beta";
        break;
        case 3:
        answer = "gamma";
        break;
        case 4:
        answer = "delta";
        break;
        default:     // default is the catch-all statement provided
        answer = "N/A";
        break;
    }


    // Only change code above this line
    return answer;
    }

console.log(caseInSwitch(6));

// you don't need to have a break for every case, can consolidate like so
function multiSwitch(val) {
    let result = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            result = "1, 2, or 3";
            break;
        case 4:
            result = "4 alone";
    }
    return result;
}

console.log(multiSwitch(2));

//
function myFun() {
    console.log("Hello");
    return "World";   // return acts as a break in the chain from top to bottom
    console.log("byebye")
}
console.log(myFun());

// Counting Cards Game

let count = 0;

function cc(card) {
  // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));

// -------------------- Objects ------------------------ //

console.log('-------- JS Objects ----------\n')
// objects similar to arrays, except uses properties instead of indexes.
const cat = {
    "name": "Whiskers",     // name, leg etc... are the properties
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

const catObject = cat.name;  // can access properties through .dot notation, similar to methods in python
console.log(catObject, cat.legs);

//bracket notation is needed if your property has spaces, but you could also use bracket notation for no space properties as well   ['No Space'] , ['noSpace']


const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

// Using a variable to access a property
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

// you can use .dot notation or brackets [] to change values of an JS object
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = 'Happy Camper';
// ourDog["name"] = 'Happy Camper';

console.log(ourDog);

// you can also .dot notation or [] new properties into the JS object

ourDog.bark = 'woof woof!';

console.log(ourDog);

// delete a property using delete

delete ourDog.tails;

// Using objects for lookups

function letsLookup(val){
    let result = "";
    let lookup = {
        "alpha": 'Adams',
        "bravo": 'Boston',
        "charlie": 'Chicago',
        "delta": 'Denver',
        "echo": 'Easy',
        "foxtrot": 'Frank',
    }
    result = lookup[val];
    return result;
}

console.log(letsLookup('charlie'));


function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }   else {
        return 'Not Found';
    }
}

// accessing nested objects

const myStorage = {
    "car": {
    "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
    },
    "outside": {
        "trunk": "jack"
    }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];   // like opening a file structure
console.log(gloveBoxContents);

// accessing nested arrays
const myPlants = [
    {
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion"
    ]
    },
    {
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch"
    ]
    }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);



// Record Collection example
const recordCollection = {
    2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
    artist: 'Robert Palmer',
    tracks: []
    },
    5439: {
    albumTitle: 'ABBA Gold'
    }
};

  // Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    }   else if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    }   else if (prop === 'tracks' && value !== "") {
            if (records[id].hasOwnProperty('tracks') === false) {
                records[id][prop] = [];
            }
            records[id][prop].push(value);
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// --------------------- While/For Loops ---------------------- //

console.log('-------- While/For Loops ----------\n')

// While Loops
const exArray1 = [];
let i = 5;

while (i >= 0) {
    exArray1.push(i);
    i--;
}

console.log(exArray1);

// For loops
const exArray2 = [];

for (let i = 1; i < 6; i++) {     // the i++ can be many different steps like i += 2 , i -= 2 etc
    exArray2.push(i);
}
console.log(exArray2);


const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// nesting for loops
const arr = [
    [1, 2], [3, 4], [5, 6, 7]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// example 2
function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
        }
    }
    return product;
}

result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result);

// Do...While loops  will run the code once no matter what even if not logical

const doArray = [];
let x = 10;

do {
    doArray.push(x);
    x++;
}   while (x < 5)

console.log(doArray);

const contacts = 
[
    {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
    },
    {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) 
{
    // Only change code below this line
    for (let x = 0; x < contacts.length; x++)
        if (contacts[x].firstName === name)
            if (contacts[x].hasOwnProperty(prop))
                return contacts[x][prop];
        else
            return 'No such property';
    return 'No such contact';
    // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile('Vos', 'number'));



console.log('-------- Recursion ----------')
// recursion is the concept that a function can be expressed in terms of itself
/* 
function processMetrovaDoll(doll)
{
    // 1) Base case
    if( found the piece of chocolote )
        return yum yum;
    // 2)
    else if( there are no more dolls)
        return No chocolote here :( )
    else
    processMetrovaDoll(the smaller doll)   this would loop back above and recheck base case 1)
}

*/

function sum(arr, n) 
{
    if (n <= 0) 
        return 0;
    else 
        return sum(arr, n - 1) + arr[n - 1];
}

console.log(sum([5, 10], 2));

function factorial(n)
{
    if (n == 1 || n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

console.log(factorial(4));

/* Logic of recursion
4 * factorial(3)
    3 * factorial(2)
        2 * factorial(1)   // factorial(1) triggers the if statement;

therefore:

4 * factorial(3)
    3 * factorial(2)
        2 * (1) // this becomes the value of factorial(2) and so on (bubbles up back)

4 * (6)
    3 * (2)
        2 * (1)
*/

// recursion countdown //
function countdown(n)
{
    if (n < 1)
        return [];
    else 
    {
        let countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(5));

// recursion range of numbers
function rangeOfNumbers(startNum, endNum)
{
    if (endNum < startNum)
        return [];
    else
    {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

console.log((rangeOfNumbers(1, 10)));

// -------- Random --------- //
console.log('------ Random ------');

// creates a random whole number from the range given
function randomRange(myMin, myMax) 
{
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let myRandom = randomRange(0, 10);
console.log(myRandom);

// parseInt return a string as a integer. if first character in string isn't a number, returns NaN

function convertInt(str)
{
    return parseInt(str);
}
console.log(convertInt('008'));

// parseInt can also have a radix,  parseInt(string, radix);

function convertToInteger(str) 
{
    return parseInt(str, 2);
}

convertToInteger("10011");

// Ternary Equation reduces the If/Else statement to one line   condition ? If : Else
function checkEqual(a, b)
{
    return a === b ? 'Equal' : 'Not Equal';
}

// Ternary Equation can be chained to encompass If / Elif / Else using the same format
/* condition ? If
    : condition ? elif
    ...
    : else
*/
function checkSign(num)
{
    return (num === 0) ? 'zero'
    : (num > 0) ? 'positive'
    : 'negative';
}




