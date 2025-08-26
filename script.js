function getNum() {
    let num = NaN;
    while (!Number.isInteger(num)) {
        let num = parseInt(prompt("Please enter your number!"));
        if (Number.isInteger(num)) {
            return num;
        } else {
            alert("Please Enter a NUMBER!");
            continue;
        };
    };
}

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else {
            console.log(i);
        }
    };
}

let userNum = getNum();
fizzBuzz(userNum);