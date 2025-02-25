console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("With a while loop:");
let i = 0;
while (i < 100) {
    i++;
    if (i % 2 !== 0) {
        console.log(i);
}
}

console.log("With a do/while loop:");
let j = 0;
do {
    j++;
    if (j % 2 !== 0) {
        console.log(j);
}} while (j < 100)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// 1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then console.log `'FIZZ'`
//    - If the number is divisible by 5, then console.log `'BUZZ'`
//    - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`

// Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`

for (let i = 1; i <= 100; i++)
 {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: FIZZBUZZ`)
    }
    else if (i % 3 === 0) {
        console.log(`${i}: FIZZ`)
    }
    else if (i % 5 === 0) {
        console.log(`${i}: BUZZ`)
    }
 }

 console.log("With a while loop:");
let k = 0;
while (k < 100) {
    k++;
    if (k % 3 === 0 && k % 5 === 0) {
        console.log(`${k}: FIZZBUZZ`)
    }
    else if (k % 3 === 0) {
        console.log(`${k}: FIZZ`)
    }
    else if (k % 5 === 0) {
        console.log(`${k}: BUZZ`)
    }
}

console.log("With a do/while loop:");
let l = 0;
do {
    l++;
    if (l % 3 === 0 && l % 5 === 0) {
        console.log(`${l}: FIZZBUZZ`)
    }
    else if (l % 3 === 0) {
        console.log(`${l}: FIZZ`)
    }
    else if (l % 5 === 0) {
        console.log(`${l}: BUZZ`)
    }
}
while (l < 100)




// Exercise 4
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log(`Found value: ${i} = ${value}. N was ${n}`);
        break;
    }
    else if (i === n && i !== value) console.log(`Did not find value: ${value}. N was ${n}`);
}


// Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

// 2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.
for (let i = start; i <= num; i++)
    {
       if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
           console.log(`${i}: FIZZBUZZ`)
       }
       else if (i % fizzDivisor === 0) {
           console.log(`${i}: FIZZ`)
       }
       else if (i % buzzDivisor === 0) {
           console.log(`${i}: BUZZ`)
       }
    }