// First exercise

const authorize = () => {
    let userFullName;
    let userPassword;
    let isAuthSuccess = false;
    let spaceIndex;

    function validatePassword(userPassword) {
        let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        return pattern.test(userPassword);
    }
    

    do {
        userFullName = prompt('Введите имя и фамилию через пробел: ');
        if (!userFullName) {
            alert('Вы не ввели имя и фамилию');
            continue;
        };

        spaceIndex = userFullName.indexOf(" ");
        if (spaceIndex === -1) {
            alert('Вы не ввели пробел');
            continue;
        };

        console.log(`userFullName`, userFullName);

        userPassword = prompt('Пароль');
        if (!userPassword) {
            alert('Введите пароль');
            continue;
        } else if ((userPassword == validatePassword(userPassword)) || (userFullName == userPassword.toLowerCase()) || (userPassword == userPassword.toUpperCase()) || (userPassword.length < 6)) {
            alert('Ваш пароль должен содержать буквы разного регистра, цифры и длина должны быть не менее 6 символов');
            continue
        } else {
            alert('Пароль сохранен');
            isAuthSuccess = true;
        };

        // if ((userPassword === true) && (userFullName === true)) {
        //     isAuthSuccess = true;
        // } else {
        //     alert('Вы не ввели все данные!');
        //   continue
        // };

    } while (!isAuthSuccess);

    const showUserNameAndSurname = (fullName) => {
        
        const name = userFullName.slice(0, spaceIndex);
        const surname = userFullName.slice(spaceIndex + 1);
        console.log(`name`, name);
        console.log(`surname`, surname);

        const resultName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const resultSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

        console.log(`resultName`, resultName);
        console.log(`resultSurname`, resultSurname);

        alert(`Welcome dear ${resultName} ${resultSurname}!`)
        console.log(`Welcome dear ${resultName} ${resultSurname}!`);
    };

    showUserNameAndSurname()

}

authorize()



// Second exercise

function randomNumber() {
    const num1 = Number(prompt("Введите минимальное число: "));
    const num2 = Number(prompt("Введите максимальное число: "));

    const getRandomInteger = (min, max) =>  {
        min = Math.ceil(min);
        max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    const integerRandom = getRandomInteger(num1, num2);
    console.log('integerRandom', integerRandom)
}

randomNumber()