//1

const getRGBFromHex = (hexCode) => {
    const red = hexCode.slice(1, 3);
    const green = hexCode.slice(3, 5);
    const blue = hexCode.slice(5, 7);

    const decimalRed = parseInt(red, 16);
    const decimalGreen = parseInt(green, 16);
    const decimalBlue = parseInt(blue, 16);

    return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`
}

const rgbResult = getRGBFromHex('#ffffff');
console.log(rgbResult);

//2

const getHexFromRGB = (r, g, b) => {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

const resultHex = getHexFromRGB(255, 255, 255);
console.log(resultHex);

//3

const maskCreditCard = (cardNumber) => {
    const MASK = '****';
  let result = '';

  for(let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
    const numbers = cardNumber.slice(i, i + 4);
    let maskingResult;
    console.log(`numbers`, numbers);

    if (j === 2 || j === 3) {
      maskingResult = MASK
    } else {
      maskingResult = numbers
    }

    if (j !== 4) {
      result += `${maskingResult} `
    } else {
      result += maskingResult

    }


  }
}

const res = maskCreditCard('5168111147864573');
console.log(`res`, res);