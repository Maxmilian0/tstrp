"use strict";

console.log("Works");

let i = 67;

function double(num) {
    let result = 0;

    result = num * 2;

    return result;
} 

function multiply(a, b) {
    return a * b;
}


console.log(multiply(double(i), multiply(i, i)));