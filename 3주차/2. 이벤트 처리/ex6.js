const hambergerNode = document.querySelector("#hamberger");
const hambergerIconNode = document.querySelector("#hamberger-icon");

hambergerNode.addEventListener("click", (event) => {
  console.log("햄버거 카드 클릭");
});

hambergerIconNode.addEventListener("click", (event) => {
  console.log("햄버거 아이콘 클릭");
});
