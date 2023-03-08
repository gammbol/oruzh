const slides = document.querySelectorAll('.expImg');

slides.forEach((slide, index) => {
  console.log(index);
  slide.style.transform = `translateX(calc(${index * 100}% + ${300 * index}px)`;
});

let curSlide = 0;
let maxSlide = slides.length  - 1;
const nextSlide = document.querySelector('.btnNext');
const prevSlide = document.querySelector('.btnPrev');

nextSlide.addEventListener('click', () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(calc(${100 * (index - curSlide)}% - 400px))`;
  });
});