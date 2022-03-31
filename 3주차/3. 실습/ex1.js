const screen = document.querySelector(".screen");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

plusBtn.addEventListener("click", (e) => {
  let value = Number(screen.innerHTML);
  screen.innerHTML = value + 1;
});

minusBtn.addEventListener("click", (e) => {
  let value = Number(screen.innerHTML);
  screen.innerHTML = value - 1;
});
