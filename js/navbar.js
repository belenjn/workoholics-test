const nav = document.querySelector(".nav");
const containerMenuItems = document.querySelector(".navbar__container--items");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  containerMenuItems.classList.remove("navbar__container--items");
  containerMenuItems.classList.add("visible");

  hamburger.classList.remove("hamburger");
  hamburger.classList.add("close");

  closeButton.classList.remove("close");
  closeButton.classList.add("closeButton");
});

closeButton.addEventListener("click", function () {
    containerMenuItems.classList.remove("visible");
    containerMenuItems.classList.add("navbar__container--items");

    hamburger.classList.remove("close");
    hamburger.classList.add("hamburger");
    
    closeButton.classList.remove("closeButton");
    closeButton.classList.add("close");
});
