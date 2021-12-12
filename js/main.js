const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
