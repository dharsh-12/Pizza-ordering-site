document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});
