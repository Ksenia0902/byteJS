//1 
const getRGBFromHex = (hexCode) => {
    let codes = '';

    for (let i = 1; i < hexCode.length; i += 2){
        console.log(i);

        const color = hexCode.slice(i, i + 2);
        let parsedColor = parseInt(color, 16);

        if (i !== hexCode.length - 2) {
            parsedColor = `${parsedColor},`
        }

        codes += parsedColor
    }

    return `rgb(${codes})`
};

const rgbResult = getRGBFromHex('#ffffff');
console.log(`rgbResult`, rgbResult)

//2

const getHexCodeFromRGB = (r, g, b) => {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
};

const resultHex = getHexCodeFromRGB(255, 255, 255);
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

  return result
}

const res = maskCreditCard('5168111147864573');

console.log(`res`, res)
