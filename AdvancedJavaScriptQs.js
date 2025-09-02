function addTwoNumbers(a, b) {
    return a+b;
}

// Arrow function version
const addTwoNumbers = (a, b) => a + b;

function stringLength( myStr ) {
    if (myStr.length < 10) {
        return "short";
    }
    return "long";
}

const stringLength = (myStr) => myStr.length < 10 ? "short" : "long";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumberStrings = numbers.map(num => String(num * 2));

console.log(doubleNumberStrings)