"use strict";

function makeFizzBuzz(N) {
    const fizzbuzz = []
    for (let i = 1; i <= N; i += 1) {
        if (i % 15 === 0) {
            fizzbuzz.push('FizzBuzz');
        } else if (i % 5 === 0) {
            fizzbuzz.push('Buzz');
        } else if (i % 3 ===0) {
            fizzbuzz.push('Fizz');
        } else {
            fizzbuzz.push(i.toString());
        } 
    }
    return fizzbuzz;
}

const fb = makeFizzBuzz(15)
console.log(fb)


function arrayDiff(array1, array2) {
    const diff = []
    for (const num of array1){
        if (!array2.includes(num) && !diff.includes(num)){
            diff.push(num);
        }
    }
    return diff;
}

const ad = arrayDiff([1, 2, 2, 2, 3, 3], [2, 2])
console.log(ad)
