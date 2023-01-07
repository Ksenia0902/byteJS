//1 
//Замена метода toggle
const toggleClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}; 

//2

const renderChessBoard = (cellsCount) => {
    const table = document.createElement('table');
    table.classList.add('chessboard');

    for (let i = 0; i < cellsCount; i++){
        const row = document.createElement('tr');
        for (let j = 0; j < cellsCount; j++){
            const cell = document.createElement('td');

            cell.classList.add('chessboard-cell');

            let isDark;

            if (i % 2 === 0) {
                isDark = j % 2 === 0
            } else {
                isDark = j % 2 !==0 
            }

            if (isDark) {
                cell.classList.add('chessboard-cell--dark')
            }

            row.append(cell);
        }
        table.append(row)
    }

    document.body.append(table)

    return table

    //tr
    //td
};

const toggleChessBoard = (chessBoard) => {
    const allCells = chessBoard.querySelectorAll('td');
    allCells.forEach((cell) => {
        cell.classList.toggle('chessboard-cell--dark')
    });
};

const board = renderChessBoard(9);

const btn = document.getElementById('toggle');
btn.addEventListener('click', () => toggleChessBoard(board));

//3

const desiredWidth = Number(prompt('Width?'));
const desiredHeight = Number(prompt('Height?'));

const gerRandomRGB = () => {
    const numbers = [];

    for (let i = 0; i < 3; i++) {
        const randomNumberInRange = Math.round(Math.random() * 255);
        numbers.push(randomNumberInRange);
    }

    const RGBString = `rgb(${numbers.join(',')})`

    return RGBString;
};


const drawRectangle = (width, height) => {
    const rect = document.createElement('div');
    const randomRGB = gerRandomRGB();

    rect.style.height = `${height}px`;
    rect.style.width = `${width}px`;
    rect.style.backgroundColor = randomRGB;

    document.body.append(rect);
};

const desiredRectangle = drawRectangle(desiredWidth, desiredHeight)

//4

const renderRectangleColors = () => {
    const rectangles = [...document.getElementById('exampleFive').children];
    console.log(rectangles);

    rectangles.forEach((rectangle) => {
        const styles = window.getComputedStyle(rectangle);
        console.log(styles);
        const color = styles.backgroundColor;
        rectangle.innerText = color;
    })
};

renderRectangleColors()