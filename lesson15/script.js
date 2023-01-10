//1 
const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

  const {meta: {paging: {total}}} = response;
  console.log(total);

  const {data : [{is_active}]} = response;
  console.log(is_active)

//2  

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

const {name: userName, surname : userSurname, ...parameters} = user;
console.log(userName, userSurname, parameters);

//3

const max = (a, b) => {
    return a > b ? a : b;
};

const firstMax = max(12, 10);
console.log(firstMax)

const myMax = (...numbers)=> {
    return numbers.reduce((minNumber, maxNumber) => minNumber < maxNumber ? maxNumber : minNumber);
}

console.log(myMax(1, 0, 12, 1000))

//4

const createMessage = (options) => {
    const {author = 'Me', text, receiver, time = new Date()} = options;
    return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
  };
  
  const message = createMessage({
    receiver: "John",
    text: "Hi!",
  });

  console.log(message);

//5 

//1)
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

const createRegexp = (text) => {
    return text.match(/\w+\d+\w+/gi)
}

console.log(createRegexp(str))

//2)
const WEBSITE_REGEXP = /^[a-z0-9]+([\-\.\_]+[a-z0-9]+)*\.[a-z]{2,6}$/g;
const form = document.getElementById("form");
const input = document.getElementById("input");

const handleClickSubmit = (event) => {
    event.preventDefault();

    const { value } = input;

    if (WEBSITE_REGEXP.test(value)) {
        alert(`Добро пожаловать!`);
      } else {
        alert("Вы ввели неверное значение!");
      }
};

form.addEventListener('submit', handleClickSubmit);

//3)

const regexp = /^\d{12,}$/g;
const numbersString = '1234567890123456'

if(regexp.test(numbersString)){
    console.log('Everything is good')
}else {
    console.log('Try again')
}





  

  