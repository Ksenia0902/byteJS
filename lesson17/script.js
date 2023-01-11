const startButton = document.createElement('button');
const pauseButton = document.createElement('button');
const timer = document.createElement('div');

startButton.innerText = 'Start';
pauseButton.innerText = 'Pause';

startButton.classList.add('btn');
pauseButton.classList.add('btn');
timer.classList.add('timer');

let intervalId = null;
let clientTimer = Number(prompt('Type seconds:'));

const setTimer = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay);

     if(!intervalId) {
        intervalId = setInterval(() => {
            let hour = Math.floor(clientTimer / 60 / 60);
            let minutes = Math.floor(clientTimer / 60 % 60);
            let seconds = Math.floor(clientTimer % 60);

            if (clientTimer >= 59){
                timer.innerText = `${hour}:${minutes}:${seconds}`;
                minutes--;
            } else {
                timer.innerText = `${hour}:${minutes}:${seconds}`;
                seconds--;
            }

            clientTimer--

            if(clientTimer === -1){
                clearInterval(intervalId);
                setTimer(3000).then(() => {
                    console.log('Timer end')
                })
            }
        }, 1000)
    }
   })  
}

startButton.addEventListener('click', () => {
    setTimer()
});
pauseButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.body.append(startButton, pauseButton, timer)