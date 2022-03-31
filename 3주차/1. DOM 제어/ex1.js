const divNodes = document.getElementsByTagName("divNodes");

// HTML 문서 내의 해당 Tag 개수 확인하기
console.log(divNodes.length);

// HTML 문서 내의 첫번째 태그 확인하기
console.log(divNodes.item(0));

// 첫번째 divNodes 태그의 컨텐츠 바꾸기
divNodes.item(0).innerHTML = 123;

// 일괄적으로 divNodes 태그의 컨텐츠 바꾸기
// const divs = Array.from(divNodes);
// divs.forEach((div) => {
//   div.innerHTML = "일괄변경";
// });
