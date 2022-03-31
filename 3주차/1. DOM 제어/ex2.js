const div = document.getElementsByClassName("div1");

// HTML 문서 내의 해당 Class 개수 확인하기
console.log(div.length);

// HTML 문서 내의 첫번째 Class 태그 확인하기
console.log(div.item(0));

// 첫번째 Class 태그의 컨텐츠 바꾸기
div.item(0).innerHTML = "첫번째 바꾸기";

// 일괄적으로 Class 태그 컨텐츠 바꾸기
// const divs = Array.from(div);
// divs.forEach((div) => {
//   div.innerHTML = "클래스 일괄 변경";
// });
