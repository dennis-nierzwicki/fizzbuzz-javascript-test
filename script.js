// Create a function that asks the user for a number.
function getNum() {
    let num = NaN; // Init number variable.
    // We want to verify the user is giving us a number.
    while (!Number.isInteger(num)) {
        num = parseInt(prompt("Please enter your number!"));
        if (Number.isInteger(num)) {
            // If we get a number, return it.
            return num;
        } else {
            alert("Please Enter a NUMBER!");
            // If we don't get a number, keep looping.
            continue;
        };
    };
}

// Here is where the magic happens.
function fizzBuzz(num) {
    // Loop <= to the number.
    for (let i = 1; i <= num; i++) {
        // Let's log FizzBuzz for numbers that divide evenly by 3 and 5.
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
            // Otherwise, log Fizz for numbers that divide by 3.
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
            // Otherwise, log Buzz for numbers that divide by 5.
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else {
            // Finally, just log the number if no conditions are met.
            console.log(i);
        }
    };
}

// Run the prompt.
let userNum = getNum();
// Run FizzBuzz.
fizzBuzz(userNum);