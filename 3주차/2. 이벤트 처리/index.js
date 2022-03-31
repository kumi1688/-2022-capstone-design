const containerNode = document.querySelector(".container");

containerNode.addEventListener("drag", (event) => {
  console.log(event);
});

window.addEventListener("contextmenu", (event) => {
  console.log(event);
});
