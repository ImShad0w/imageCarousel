//Get the all of the elements

const imageCarousel = document.getElementById("imageCarousel");
const imageSlides = document.getElementById("imageSlides");
const slides = document.querySelectorAll(".slide");

//Move the slider to the left
let currentIndex = 0;
const slideWidth = 250; // match your CSS

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex++;
    imageSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  if (event.key === "ArrowLeft") {
    currentIndex--;
    imageSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});
//function slideImages(){
//
//}
