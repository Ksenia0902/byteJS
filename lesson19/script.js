// // 1

// const BASE_URL_IP = 'https://ipapi.co/json/'
// const BASE_URL_FLAG = 'https://restcountries.com/v2/name'

// const containerCard = document.createElement('div');


// const getUserIP = async (url) => {
//   try {
//     let response = await fetch(url);
//     if (response.ok) {
//       let result = await response.json();

//       getFlag(result, BASE_URL_FLAG)

//     } else {

//       throw new Error(`Error ${response.status}`);
//     }

//   } catch (error) {
//     console.log(error.message)

//   }
// }

// const getFlag = async (result, url) => {

//   try {
//     let { country_name } = result
//     let flagResponse = await fetch(`${url}/${country_name}`)

//     if (flagResponse.ok) {
//       let flagResult = await flagResponse.json()
//       let [{ flag }] = flagResult

//       renderCountryData(result, flag)

//     } else {

//       throw new Error(`Error ${response.status}`);
//     }

//   } catch (error) {

//     console.log(error.message)
//   }

// }

// const renderCountryData = ({ country_capital, country_name, currency }, flag) => {

//   const countryNameElem = document.createElement('h2')
//   const capitalNameElem = document.createElement('h3')
//   const currencyElem = document.createElement('p')
//   const imgFlag = document.createElement('img')
//   imgFlag.classList.add('img_flag')
//   imgFlag.style.width = `${150}px`;
//   imgFlag.style.height = `${100}px`;
//   imgFlag.setAttribute('src', flag)

//   countryNameElem.innerText = country_name
//   capitalNameElem.innerText = country_capital
//   currencyElem.innerText = currency

//   containerCard.append(countryNameElem, capitalNameElem, currencyElem, imgFlag)
//   document.body.append(containerCard)
// }

//  getUserIP(BASE_URL_IP)

//2 

const URL = 'https://swapi.dev/api/people';
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const contChar = document.getElementById('cont-char')

const handleErrors = async (request) => {
    if (!request.ok) {
      let { error } = await request.json()
      throw new Error(request.status)
    }
    return request
  
  }
  
  const getCharacter = async () => {

    const {value} = input;
    if (value === '') {
      alert('Enter id character')
    } else {
      try {
        
        const request = await handleErrors(
          await fetch(`${URL}/${value}`)
        )
        
        const responseCharacter = await request.json()
  
        renderCartName(responseCharacter)
  
      } catch (error) {
        if (error.message === 404) {
  
          alert('There are no available id')
  
        } else {
  
          alert('error')
        }
  
      }
    }
  }
  
  const getFilms = async ({ films }) => {
  
    let requestFilms = films.map(film => fetch(film))
    
    try {
      let resultFilmsRequest = await Promise.all(requestFilms)
      let responseFilms = resultFilmsRequest.map(response => response.json())
      let filmsList = await Promise.all(responseFilms)
  
      renderFilmList(filmsList)
  
    } catch (error) {
      alert('Error')
    }
  }
  
  const renderCartName = (responseCharacter) => {
    const { name } = responseCharacter
    const nameCharacter = document.createElement('h2')
    const buttonShowFilms = document.createElement('button')
    buttonShowFilms.innerText = 'more'
    nameCharacter.innerText = name
  
    buttonShowFilms.addEventListener('click', (event) => {
      if (!event.target.hasAttribute('isActive')) {
        event.target.setAttribute('isActive', '')
        getFilms(responseCharacter)
      } else {
        event.target.removeAttribute('isActive')
        event.target.nextElementSibling.remove()
      }
  
    })
  
    
    contChar.append(nameCharacter, buttonShowFilms)
  
    document.body.append(contChar)
  }
  
  const renderFilmList = (filmsList) => {
    
    for (let film of filmsList) {
      const { title } = film
      const films = document.createElement('p')
      films.innerText = title
      contChar.append(films)
    }
  
  }
  
  btn.addEventListener('click', getCharacter)