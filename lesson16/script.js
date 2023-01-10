

const visitCounter = () => {
    const greeting = document.createElement('h3');
greeting.innerHTML = 'Hello!';
    localStorage.setItem('greeting', 'Welcome!')

    const counterInfo = document.createElement('h3');
    let numbersOfVisit = localStorage.getItem('onloadCounter');

    createCounter(counterInfo, numbersOfVisit)
    document.body.append(greeting, counterInfo);
};

const createCounter = (info, numbs) => {
    if(numbs === null){
        numbs = 0;
    }
    numbs++;
    localStorage.setItem('onloadCounter', numbs);
    
    if(numbs > 1){
        info.innerHTML = `You have visited this website ${numbs} times`;
    }

    return info
}

visitCounter();