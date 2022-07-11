window.onload = function () {
  btns = document.getElementsByClassName("btn");
  footers = document.getElementsByClassName("footer").item(0).children;

  Array.from(btns).forEach((value, i) => {
    value.addEventListener("click", () => {
      console.log("click");
      console.log(footers);
      Array.from(footers).forEach((value, i) => {
        console.log(value.classList);
        if (value.classList[1] === "active") {
          value.classList.remove("active");
          value.classList.add("inactive");
        } else {
          value.classList.remove("inactive");
          value.classList.add("active");
        }
      });
    });
  });
};
