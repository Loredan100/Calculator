// let equal_pressed = 0;
let buttons = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.value;
  });
});

equal.addEventListener("click", () => {
  input.value = eval(input.value);
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
