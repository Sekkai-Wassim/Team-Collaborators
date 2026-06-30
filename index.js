function sum(a, b) {
    // This function takes two numbers as input and returns their sum
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

function multiply(a, b) {
    return a * b;
}   


module.exports = { sum, multiply };
console.log(module.exports.sum(2, 3)); // Output: 5
console.log(module.exports.multiply(2, 3)); // Output: 6


