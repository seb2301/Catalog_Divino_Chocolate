let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

let autoPlayInterval = setInterval(() => {
  nextSlide();
}, 3000); // 3000ms = 3 segundos

function resetInterval() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });
}
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });
}

showSlide(slideIndex);
