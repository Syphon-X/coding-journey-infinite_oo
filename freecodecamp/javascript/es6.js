
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

