
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

// Destructuring assignment to extract values from objects, reduces individual const initialization

const user = {'name': 'Ted', 'age': 35};

const {name, age} = user;  // shorthand to reduce lines of constants
// better than const name = user.name etc...

console.log(user.name, user.age);


