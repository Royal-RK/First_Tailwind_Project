let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");
let isOpen = true;

menuBtn.addEventListener("click", () => {
  if (isOpen === true) {
    navMenu.style.right = "-100%";
    isOpen = false;
  } else {
    navMenu.style.right = "0%";
    isOpen = true;
  }
});
