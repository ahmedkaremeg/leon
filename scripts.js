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
  } else {
    upButton.classList.add("opacity-0", "pointer-events-none");
  }
});

//up button
upButton.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
