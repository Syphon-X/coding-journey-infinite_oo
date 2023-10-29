/* Closure Practice */

// A closure is a function that has access to the parent/global scope, even after the parent function has closed. 

let createCounter = function(x) 
{
    return function(y) 
    {
        return x + (2 * y);
    }
}

const counter = createCounter(10);
// The value of x was stored and can be recalled everytime the variable counter is initiated.
// The value being passed in is y.

console.log(counter(5));  // 20
console.log(counter(10)); // 30
console.log(counter(20)); // 50
