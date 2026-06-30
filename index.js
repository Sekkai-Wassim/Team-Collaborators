function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}   


module.exports = { sum, multiply };
console.log(module.exports.sum(2, 3)); // Output: 5
console.log(module.exports.multiply(2, 3)); // Output: 6


