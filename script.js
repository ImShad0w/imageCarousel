//Get the all of the elements

const imageCarousel = document.getElementById("imageCarousel");
const imageSlides = document.getElementById("imageSlides");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const currentSlides = document.querySelectorAll(".sliderSelec");

//Move the slider to the left
let currentIndex = 0;
let slideWidth = 250;

btnLeft.addEventListener("click", () => {
  moveLeft()
})

btnRight.addEventListener("click", () => {
  moveRight();
})

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    imageSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    showCurrentSlide();
  }
}

function moveRight() {
  if (currentIndex != slides.length - 1) {
    currentIndex++;
    imageSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    showCurrentSlide();
  }
}

function rotateSlides() {
  setInterval(() => {
    if (currentIndex < slides.length - 1) {
      moveRight();
      showCurrentSlide();
    } else {
      currentIndex = 0;
      imageSlides.style.transform = `translateX(0px)`; // reset to start
      showCurrentSlide();
    }
  }, 5000);
}

window.addEventListener("load", () => {
  rotateSlides();
});

//On click carousel will jump on the nth image
currentSlides.forEach((slide) => {
  slide.addEventListener("click", () => {
    imageSlides.style.transform = `translateX(-${slide.value * slideWidth}px)`;
  })
})

//Shows in the buttons what is the current slide
function showCurrentSlide() {
  currentSlides.forEach((slide) => {
    if (currentIndex == slide.value) {
      slide.checked = true;
    }
  })
}
