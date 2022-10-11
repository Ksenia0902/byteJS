// First exercise
const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => { 
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let availableAttempts = 3;

    do {
        userLogin = prompt('Логин');
        if (!userLogin) {
            alert('Введите логин');
            continue;
        };

        userPassword = prompt('Пароль');
        if (!userPassword) {
            alert('Введите пароль');
            continue;
        }

        if ((userPassword === PASSWORD) && (userLogin == LOGIN)) {
            isAuthSuccess = true;
        } else {
            alert('Данные неверны!');
            availableAttempts--;
            alert(`Осталось ${availableAttempts} попыток`);
        };

        if (availableAttempts == false) {
            alert('Доступ запрещён!');
            break
        };
        
        
    } while (!isAuthSuccess);
    
    alert('Welcome!');

}

authorize();


// Second exercise

let n = 100;

nextPrime:
for (let i = 20; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}