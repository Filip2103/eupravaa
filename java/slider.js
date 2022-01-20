var current = 0;
var images = document.getElementById("slider");

function carusel() {
  images.children[current].classList.remove("trenutna");

  current = (current + 1) % 5;

  images.children[current].classList.add("trenutna");
}

setInterval(carusel, 3500);