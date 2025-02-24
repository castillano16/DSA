// Initialize variables
let a = 25, b = 20, c = 12, d = 15;
const e = 15; // Constant

// Task a: Display sum of all declared variables including constant e
let sum = a + b + c + d + e;
console.log("Sum:", sum);

// Task b: Compare variable d and constant e using relational operators
console.log("d > e:", d > e);
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d === e:", d === e);

// Task c1: Subtract all declared values
let subtraction = a - b - c - d - e;
console.log("Subtraction:", subtraction);

// Task c2: Multiply a and c, divided by e
let multiplication = (a * c) / e;
console.log("Multiplication result:", multiplication);

// Task c3: Display exponent value of e raised to the power of c
let exponent = e ** c;
console.log("Exponentiation result:", exponent);

// Task c4: Reassign value of c to e, then display the result
c = e;
console.log("New value of c:", c);
