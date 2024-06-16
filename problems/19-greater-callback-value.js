/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(value, cb1, cb2) {
    let cb1Value = cb1(value);
    let cb2Value = cb2(value);
    
    if (cb1Value > cb2Value) {
        return cb1Value;
    } else {
        return cb2Value;
    }
};
module.exports = greaterCallbackValue;

