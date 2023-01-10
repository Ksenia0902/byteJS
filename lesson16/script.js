const greeting = (isInitial, visitCount = 0) => {
    const greetingElement = document.createElement('h3');
    const visitCountElement = document.createElement('h3');
    greetingElement.innerText = `Welcome!`;
    visitCountElement.innerText = `You have visited this website ${visitCount} times`;

    document.body.append(greetingElement);

    if(isInitial){
        document.body.append(visitCountElement)
    }
};

if(localStorage.getItem('visits')){
    const visits = JSON.parse(localStorage.getItem('visits'));
    const updatedVisits = visits + 1;
    localStorage.setItem('visits', updatedVisits);

    greeting(true, updatedVisits)
}else {
    localStorage.setItem('visits', 1);
    greeting(false)
}