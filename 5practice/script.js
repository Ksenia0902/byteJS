// 1. Написать функцию для авторизации пользователя
//    с базовой валидацией данных.
//    - логин и пароль должны совпадать со слудующими:
//      ADMIN
//      1q2w3e
//    - Если пользователь не ввел логин, показать ему
//      сообщение "введите логин" и начать авторизацию
//      заново, если не ввел пароль - показать сообщение
//      "введите пароль" и начать авторизацию заново
// 2. Реализовать функцию, которая будет рисовать в
//    консоли пирамидку заданной пользователем высоты.
//     *
//    ***
//   *****
//  *******
// *********

//1 
const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => { 
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;

    do {
        userLogin = prompt('Enter your login');
        if (!userLogin) {
            alert('Try again');
            continue;
        };

        userPassword = prompt('Enter your password');
        if (!userPassword) {
            alert('Try again');
            continue;
        };

        if ((userLogin === LOGIN) && (userPassword === PASSWORD)) {
            isAuthSuccess = true;
            alert('Welcome');
        } else {
            alert('Try again');
        };

    } while (!isAuthSuccess);
}

// authorize()

//2

const makePyramid = (height) => {
    for (let i = 0; i < height; i++) {
        let spacesBefore = '';
        let stars = '';

        for (let j = 0; j < 2 * i + 1; j++) {
            stars += '*';
        };

        for (let k = 0; k < height - i - 1; k++) {
            spacesBefore += ' ';
        }

        console.log(spacesBefore + stars);
    }
};

const desiredHeight = Number(prompt("Какая высота пирамиды ?"));
makePyramid(desiredHeight)