const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');
const photos = [...document.querySelectorAll('.slide')];

console.dir(btnNext);
console.dir(btnPrev);

let currentSlideIndex = 0;

const hideSlidesOnLoad = () => {
    const slidesHidden = photos.slice(1);

    slidesHidden.forEach(slide => {
        slide.classList.add('hidden')
    });
};

window.addEventListener('DOMContentLoaded', hideSlidesOnLoad);


handleNextButtonClick = () => {
    photos[currentSlideIndex].classList.add('hidden')
    
    if (currentSlideIndex === photos.length - 1) {
        photos[0].classList.remove('hidden');
        currentSlideIndex = 0;
    } else {
        photos[currentSlideIndex + 1].classList.remove('hidden');
        currentSlideIndex++;
    }
};

handlePrevButtonClick = () => {
    photos[currentSlideIndex].classList.add('hidden')
    
    if (currentSlideIndex === 0) {
        photos[photos.length - 1].classList.remove('hidden');
        currentSlideIndex = photos.length - 1;
    } else {
        photos[currentSlideIndex - 1].classList.remove('hidden');
        currentSlideIndex--;
    }

};

btnPrev.addEventListener('click', handlePrevButtonClick);
btnNext.addEventListener('click', handleNextButtonClick);