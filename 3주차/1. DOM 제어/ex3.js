// 속성 찾아내기
const div1 = document.getElementById("div1");

// 속성(Attribute) 확인하기(1)
console.log(div1.getAttribute("id"));
// 속성(Attribute) 확인하기(2)
console.log(div1.id);

// 속성(Attribute) 제거하기 (1)
div1.removeAttribute("id");
// 속성(Attribute) 제거하기 (2)
div1.id = null;

// 속성(Attribute) 수정하기 (1)
div1.id = "new-div";
// 속성 (Attribute) 수정하기 (2)
div1.setAttribute("id", "new-div");
