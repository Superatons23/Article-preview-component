window.onload = function () {
  btns = document.getElementsByClassName("btn");
  footers = document.getElementsByClassName("footer").item(0).children;
  window.addEventListener("resize", () => {
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth < 1020) {
      if (footers[1].classList[1] === "active") {
        footers[0].classList.add("inactive");
        footers[0].classList.remove("active");
      } else {
        footers[0].classList.add("active");
        footers[0].classList.remove("inactive");
      }
    }
  });
  Array.from(btns).forEach((value, i) => {
    value.addEventListener("click", () => {
      Array.from(footers).forEach((value, i) => {
        var windowWidth = window.innerWidth;
        if (windowWidth < 1020) {
          if (value.classList[1] === "active") {
            value.classList.remove("active");
            value.classList.add("inactive");
          } else if (value.classList[1] === "inactive") {
            value.classList.remove("inactive");
            value.classList.add("active");
          }
        } else {
          if (
            footers[1].classList[1] === "active" &&
            value.classList[0] === "footer-secondary"
          ) {
            value.classList.remove("active");
            value.classList.add("inactive");
          } else if (
            footers[1].classList[1] === "inactive" &&
            value.classList[0] === "footer-secondary"
          ) {
            value.classList.remove("inactive");
            value.classList.add("active");
          }
        }
      });
    });
  });
};
