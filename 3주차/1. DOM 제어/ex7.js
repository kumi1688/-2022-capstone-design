// 1. 내가 원하는 태그 찾아내기
let divs = document.getElementsByTagName("div");

// 2. 내가 원하는 태그 제거하기
// 만약 태그가 여러개라면 Array.from 메서드를 사용해 배열로 바꾼뒤 반복문 사용할 것
divs = Array.from(divs);
divs.forEach((div) => {
  div.remove();
});
