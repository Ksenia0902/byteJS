const car = {
    name: 'BMW',
    year: 2020,
    price: 30000,
};

const makeClone = (obj) => {
    const clone = {};

    for (let key in obj) {
        clone[key] = obj[key];
    }

    return clone
};

const carClone = makeClone(car);
console.log(carClone);

//recursive

const recursiveFactorial = (n) => {
    if (n === 1) {
        return n
    };

    return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(6));

//deep Clone

const deepCone = (obj) => {
    const clone = {};

    console.log(obj)

    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            clone[key] = obj[key];
        } else {
            clone[key] = deepCone(obj[key])
        }
    }

    return clone;
}