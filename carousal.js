const carousalContainer = document.querySelector('.carousal-slides');
const carousalSlides = Array.from(document.querySelectorAll('.carousal-slide'));

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const slideSize = carousalSlides[0].getBoundingClientRect().width;


function moveSlide(currentSlide, targetSlide) {
    carousalContainer.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

function toogleChangeButtons(slideIndex) {
    if (slideIndex === 0) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    } else if (slideIndex === carousalSlides.length - 1) {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
}

// arranging the slides
carousalSlides.forEach((slide, index) => {
    slide.style.left = (index * slideSize) + "px";
});

// show the next slide after clicking next button
nextBtn.addEventListener('click', e => {
    const currentSlide = carousalContainer.querySelector('.current-slide');
    const slideIndex = carousalSlides.indexOf(currentSlide);
    const targetSlide = carousalSlides[slideIndex + 1];
    
    toogleChangeButtons(slideIndex + 1);
    moveSlide(currentSlide, targetSlide);
});

// show the previous slide after clicking previous button
prevBtn.addEventListener('click', e => {
    const currentSlide = carousalContainer.querySelector('.current-slide');
    const slideIndex = carousalSlides.indexOf(currentSlide);
    const targetSlide = carousalSlides[slideIndex - 1];

    toogleChangeButtons(slideIndex - 1);
    moveSlide(currentSlide, targetSlide);
});

// previous button should be hidden at first slide
toogleChangeButtons(0);