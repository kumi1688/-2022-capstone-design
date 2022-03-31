// id를 사용할 경우 대문자는 사용하지 말 것
let cards = document.querySelectorAll(".card");

const header = document.querySelector("header");

// 모든 카드에 클릭 이벤트 리스너 등록
cards = Array.from(cards);
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    let selectedItem = "";
    const tagName = event.target.tagName;
    if (tagName === "I" || tagName === "P") {
      selectedItem = event.target.parentNode.id;
    } else {
      selectedItem = event.target.id;
    }
    selectedItem += " ";
    header.innerHTML += selectedItem;
  });
});
