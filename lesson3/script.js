// First exercise 
const firstNumber = Number(prompt("First number"));
const secondNumber = Number(prompt("Second number"));

if (firstNumber === secondNumber) {
    alert("Числа рівні");
    console.log(`${firstNumber} = ${secondNumber}`);
} else if (firstNumber > secondNumber) {
    alert(`${firstNumber} більше ніж ${secondNumber}`);
    console.log(`${firstNumber} > ${secondNumber}`);
} else {
    alert(`${firstNumber} менше ніж ${secondNumber}`);
    console.log(`${firstNumber} < ${secondNumber}`);
};

// Second exercise
const number1 = Number(prompt("First number"));
const number2 = Number(prompt("Second number"));
const action = prompt("+, -, / or *");

switch (action) {
    case '+' :
        let additionResult = number1 + number2;
        alert(additionResult);
        console.log(additionResult);
        break;
    case '-':
        let subtractionResult = number1 - number2;
        alert(subtractionResult);
        console.log(subtractionResult);
        break;
    case '/':
        let divisionResult = number1 / number2;
        alert(divisionResult);
        console.log(divisionResult);
        break;
    default:
        let multiplicationResult = number1 * number2;
        alert(multiplicationResult);
        console.log(multiplicationResult);
}

//Third exercise 
const minTeenAge = 12;
const maxTeenAge = 18;
const minPensionerAge = 60;
const maxPensionerAge = 80;
const visitorAge = Number(prompt("Скільки Вам років?"));
if ((visitorAge > maxTeenAge) && (visitorAge < minPensionerAge)) {
    alert("Гарного Вам дня!");
    console.log("Гарного Вам дня!");
} else if (((visitorAge <= maxTeenAge) && (visitorAge >= minTeenAge)) || ((visitorAge >= minPensionerAge) && (visitorAge <= maxPensionerAge))) {
    let isApproval = confirm("Є дозвіл?");
    if (isApproval) {
        alert("Гарного Вам дня!");
        console.log("Гарного Вам дня!");
    } else {
        alert("Потрібен дозвіл");
        console.log("Гарного Вам дня!");
    };
} else {
    alert("Вам не можна");
    console.log("Вам не можна");
};

