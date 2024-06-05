window.onscroll = function () {
  const navbar = document.querySelector("#nav");
  const scroll = document.querySelector("#scrolltop");
  if (window.pageYOffset > 0) {
    scroll.classList.remove("scale-0");
    scroll.classList.add("flex");
    navbar.classList.add("fixed");
  } else {
    scroll.classList.remove("flex");
    scroll.classList.add("scale-0");
    navbar.classList.remove("fixed");
  }
};

const burger = document.querySelector("#burger");
const menu = document.querySelector("#nav-menu");
const line = burger.querySelectorAll(".burger");
burger.addEventListener("click", () => {
  console.info("Done");
  line[0].classList.toggle("-rotate-[38deg]");
  line[1].classList.toggle("scale-x-0");
  line[2].classList.toggle("rotate-[38deg]");
  menu.classList.toggle("scale-y-0");
});
