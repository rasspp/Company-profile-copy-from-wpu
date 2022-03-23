const customParallax = document.querySelector(".custom-parallax");

const imgParallax = customParallax.firstElementChild.firstElementChild;
window.addEventListener("scroll", function () {
   const value = window.scrollY;
   imgParallax.style.marginTop = value * 1 - 900 + "px";
});
