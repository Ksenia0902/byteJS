// First exercise
function sum(a, b) {
    return a + b;
};

const sum2 = (x, y) => x + y;

const res1 = sum(1, 2);
const res2 = sum2(3, 6);

console.log(`res1`, res1);
console.log(`res2`, res2);

// Second exercise
function greeting() {
    const userName = prompt("What is your name?");
    const userAge = Number(prompt("What is your age?"));
    if (userAge >= 30) {
        alert(`Здавствуйте, ${userName}`);
    } else {
        alert(`Привет, ${userName}`);
    };
};

greeting();

//Third exercise

function exponentiation(a, b = 2) {
    return a **b;
};

const result = exponentiation(3);
console.log(result);