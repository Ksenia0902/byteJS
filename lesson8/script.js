// First exercise

const countTrue = (value) => {
    const result = [];

    for (let search of value) {
        
        if (search === true) {
            result.push(search);
        };
    };

    return result.length
};

const result = countTrue([true, false, false, true, false]); // -> 2
const secondResult = countTrue([false, false, false, false]); // -> 0
const thirdResult = countTrue([]); // -> 0

console.log(result);
console.log(secondResult);
console.log(thirdResult);

// Second exercise

const getOccurrencesCount = (arr) => {

    const res = {};

    for (const element of arr) {
        if (res[element]) {
            res[element] += 1;
        } else {
            res[element] = 1;
        }
    }
    
    return res;
}

const occurrencesCount = getOccurrencesCount(["apples", "oranges", "pears", "pears", "apples", "oranges", "oranges", "pears"]);
console.log(occurrencesCount);

// Third exercise

const findExcess = (arr) => {
    let excess = 0;
    let arr1 = [];
    let arr2 = [];

    for (let number of arr) {
        
        if (number % 2 !== 0) {  
            arr1.push(number);
        } else {
            arr2.push(number);
        };

        if ((arr1.length === 1) && (arr1.length < arr2.length)) {
            excess = arr1[0];
        } else {
            excess = arr2[0];
        }
    };

    return excess;
}

const resultOfExcess = findExcess([0, 1, 2]); // -> 1
console.log(resultOfExcess);
//findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0
