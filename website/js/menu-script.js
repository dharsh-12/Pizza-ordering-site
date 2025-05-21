let currentSlides = [0, 0, 0, 0, 0, 0]; // Store current slide index for 6 pizzas
let slides = document.querySelectorAll(".slider");

function showSlide(pizzaIndex, slideIndex) {
    let pizzaSlides = slides[pizzaIndex].querySelectorAll(".pizza-slide");
    pizzaSlides.forEach(slide => slide.style.display = "none");
    pizzaSlides[slideIndex].style.display = "block";
}

function nextSlide(pizzaIndex) {
    let pizzaSlides = slides[pizzaIndex].querySelectorAll(".pizza-slide");
    currentSlides[pizzaIndex] = (currentSlides[pizzaIndex] + 1) % pizzaSlides.length;
    showSlide(pizzaIndex, currentSlides[pizzaIndex]);
}

function prevSlide(pizzaIndex) {
    let pizzaSlides = slides[pizzaIndex].querySelectorAll(".pizza-slide");
    currentSlides[pizzaIndex] = (currentSlides[pizzaIndex] - 1 + pizzaSlides.length) % pizzaSlides.length;
    showSlide(pizzaIndex, currentSlides[pizzaIndex]);
}

// Initialize first slide for all pizzas
document.addEventListener("DOMContentLoaded", () => {
    slides.forEach((slide, index) => showSlide(index, 0));
});
