
// ---------- ES6 ------------ //

function checkScope() 
{
    let i = 'function scope';
    if (true) 
    {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
console.log(checkScope());

// constants doesn't allow mutability through the variable identifier, but through element assignment

const s = [5, 7, 2];
function editInPlace() 
{
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);  // will return s as [2, 5, 7]

// preventing object mutation through Object.freeze()

function freezeObj() 
{
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);

// spreading an array in-place
const ar1 = [6, 78, 2 , 65];
let ar2;

ar2 =[...ar1];
console.log(ar2)

// ---------------- Destructuring ----------------- //
// Destructuring assignment to extract values from objects, reduces individualize const initialization
console.log('\n----------- Destructuring ------------\n')
const user = {'name': 'Ted', 'age': 35};

const {name, age} = user;  // shorthand to reduce lines of constants

console.log(user.name, user.age);

// can also reassign variables from objects example from above rewritten as:

const { name: userName, age: userAge } = user;
console.log(userName, userAge);

// you can also destructure to assign variable from nested objects

const newUser = 
{
    tedChow: 
    {
        age1: 35, email: 'syphonxart@gmail.com'
    }
}
//
const {tedChow: {age1, email}} = newUser;

const { tedChow: {age1: newAge, email: newEmail}} = newUser;

console.log(newUser);

// destructuring assignment to assign variables from Arrays

const [a, b] = [1, 2, 3, 4]
console.log(a, b);

const [a2, b2,,, c2] = [1, 2, 3, 4, 5, 6];  // commas allow you to skip in the array index

let a3 = 8, b3 = 6;
// Only change code below this line
[a3, b3] = [b3, a3];
console.log(a3, b3);
