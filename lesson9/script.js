// 1.1

const numbers = [1, 2, -10, -2, 7];
const numbersIntoBooleanType = numbers.map((number) => number > 0 === true)
    // if (number > 0) {
    //     return true;
    // } else {
    //     return false;
    // }

console.log(numbers);
console.log(numbersIntoBooleanType);

//1.2

const users = [
    {
        name: 'Sam',
        role: 'admin',
        age: 25,
    },
    {
        name: 'Peter',
        role: 'admin',
        age: 16,
    },
    {
        name: 'Pablo',
        role: 'admin',
        age: 32,
    },
    {
        name: 'Enrico',
        role: 'client',
        age: 43,
    },
    {
        name: 'Mary',
        role: 'client',
        age: 34,
    },
    {
        name: 'Katerine',
        role: 'guest',
        age: 17,
    },
];



const yourFunction = (people) => {

    const adults = users.filter((personAge) => personAge.age > 18);

    const adultRole = adults
        .filter((personRole) => personRole.role === 'admin')
        .map((personName) => personName.name)


    return adultRole

}

const adultAdmins = yourFunction(users); // [Sam, Pablo]
console.log(adultAdmins)

//1.3

const numbersArray = [1, 10, 17, 24, 45];

const sum = numbersArray.reduce((a, b) => a + b, 0) / numbersArray.length;
// const avg = (sum / numbersArray.length);

console.log(sum);


// 2

//forEach

const ownForEach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    };
}

const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
};

ownForEach([1, 2, 3], logger);

//map

const ownMap = function (array, callback) {
    let ownMapArray = [];

    for (let i = 0; i < array.length; i++) {
        ownMapArray.push(callback(array[i], i, array))
    };

    console.log(ownMapArray);
    return ownMapArray

}

const increment = (number) => number + 1;
ownMap([1, 2, 3], increment); // [2, 3, 4]


//filter

const ownFilter = function (array, callback) {

    let filter = [];

    for (let i = 0; i < array.length; i++) {
        let isFilter = callback(array[i], i, array)

        if (isFilter) {
            filter.push(array[i]);
        }
    }
    console.log(filter)
    return filter
}

const isNegative = (number) => number < 0;
ownFilter([-2, 4, -1], isNegative); // [-2, -1]

//3

const data = [
    {
        name: "John",
        age: 24,
        position: "senior",
        isActive: false,
    },
    {
        name: "Peter",
        age: 33,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sam",
        age: 29,
        position: "junior",
        isActive: true,
    },
    {
        name: "Mary",
        age: 24,
        position: "middle",
        isActive: false,
    },
    {
        name: "Steve",
        age: 23,
        position: "middle",
        isActive: true,
    },
    {
        name: "Kate",
        age: 31,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sally",
        age: 19,
        position: "junior",
        isActive: false,
    },
    {
        name: "Jack",
        age: 19,
        position: "middle",
        isActive: true,
    },
];

const filterData = ((array, obj) => {
    for (let key in obj) {
        array = array.filter((argument) => argument[key] === obj[key])
    }
    return array
})
 
const result = filterData(data, { age: 19, position: "junior" });
console.log(result);