const cube = document.getElementById("cube");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.id === "front") {
      cube.style.rotate = "y 0deg";
    } else if (button.dataset.id === "left") {
      cube.style.rotate = "y 90deg";
    } else if (button.dataset.id === "right") {
      cube.style.rotate = "y 180deg";
    } else if (button.dataset.id === "back") {
      cube.style.rotate = "y 270deg";
    }
  });
});