let menu = document.getElementById("menu");
let openButton = document.getElementById("open");
let closeButton = document.getElementById("close");
const overlay = document.getElementById("overlay");

menu.classList.add("menu-hidden");
// toggle menu close or open
function menuNav() {
  menu.classList.toggle("menu-hidden");
  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("pointer-events-none");
}

openButton.addEventListener("click", menuNav);
closeButton.addEventListener("click", menuNav);

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !openButton.contains(e.target)) {
    menu.classList.add("menu-hidden");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }
});
//check user if scroll or not
let upButton = document.getElementById("up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    upButton.classList.remove("opacity-0", "pointer-events-none");
    menuStick.classList.add("fixed");
  } else {
    upButton.classList.add("opacity-0", "pointer-events-none");
    menuStick.classList.remove("fixed");
  }
});

//up button
upButton.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//menu scroll

let header = document.querySelector("menuStick");
let lastScroll = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // بيسكرول تحت = هيد يختفي
    header.classList.add("header-hidden");
    header.classList.remove("bg-[var(--white)]");
  } else {
    // بيسكرول فوق = هيد يرجع
    header.classList.remove("header-hidden");
    header.classList.add("bg-[var(--primary-color)]");
  }

  lastScroll = currentScroll;
});

let colorButton = document.getElementById("colorButton");

colrButton.addEventListener("click", function () {
  document.documentElement.style.setProperty("--primary-color", "#ff0000");
});

//
