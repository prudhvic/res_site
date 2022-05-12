let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let nav = document.querySelector("nav");
openBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});
