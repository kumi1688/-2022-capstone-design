let buttonNodes = document.querySelectorAll(".button");
const screenNode = document.querySelector(".screen");

const windowNode = document.querySelector("window");
const iconNode = document.querySelector(".iconbox");

window.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    screenNode.innerHTML = screenNode.innerHTML.slice(
      0,
      screenNode.innerHTML.length - 1
    );
  } else if (event.key === "Enter") {
    phoneCall();
  } else {
    screenNode.innerHTML += event.key;
  }
});

buttonNodes = Array.from(buttonNodes);
buttonNodes.forEach((button) => {
  button.addEventListener("click", (event) => {
    screenNode.innerHTML += event.target.innerHTML;
  });
});

iconNode.addEventListener("click", (event) => {
  phoneCall();
});

function phoneCall() {
  alert("현재 거신 전화번호는 " + screenNode.innerHTML + "입니다");
  screenNode.innerHTML = "";
}
