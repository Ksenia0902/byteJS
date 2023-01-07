//1 
const clicksElement = document.getElementById("clicks");
const handleClicks = (e) => {
    const element = e.target;
    console.log(`element`, element);

    const clickCounterElement = element.querySelector('#clicksCounter');
    const currentClicks = Number(clickCounterElement.innerText)
    clickCounterElement.innerText = currentClicks + 1;
};
clicksElement.addEventListener("click", handleClicks);

//2

const createInfoElement = (event) => {
    const coords = {
        x: event.clientX,
        y: event.clientY,
    };

    const infoElement = document.createElement('p');
    infoElement.innerText = `X: ${coords.x} Y:${coords.y}`;
    infoElement.id = 'infoElement';

    return infoElement
};

const handleAddInfoElement = (event) => {
    const createdElement = createInfoElement(event);
    const maybeElement = document.getElementById(createdElement.id);

    if (maybeElement) {
        maybeElement.remove()
    } else {
        document.body.append(createdElement);
    }
}

clicksElement.addEventListener("click", handleAddInfoElement);

//3
const movesElement = document.getElementById("moves");

const updateCoordsInInfoElement = (event, element) => {
    const coords = {
        x: event.clientX,
        y: event.clientY,
    };

    element.innerText = `X: ${coords.x} Y:${coords.y}`;

};

let infoElement = null;

movesElement.addEventListener('mouseenter', (event) => {
    infoElement = createInfoElement(event);
    movesElement.append(infoElement);
});

movesElement.addEventListener('mousemove', (event) => {
    updateCoordsInInfoElement(event, infoElement);
});

movesElement.addEventListener('mouseleave', (event) => {
    infoElement.remove()
});

//4

const keysList = [...document.querySelectorAll(".keyboard-item")];

const getCurrentPressedKey = (event) => {
    const pressedKey = event.key;
    
    return keysList.find((key) => {
        return key.innerText.toLowerCase() == pressedKey;
    })
}

const handleKeyDown = (event) => {
    const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.add("keyboard-item--pressed");
}

const handleKeyUp = (event) => {
     const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.remove("keyboard-item--pressed");
}

window.addEventListener('keyup', handleKeyUp);
window.addEventListener('keydown', handleKeyDown);