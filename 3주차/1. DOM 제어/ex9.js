// 1. Element 하나만 선택 가능
let element = document.querySelector("#p-01");
console.log(element);

// 2. 태그 이름으로 선택 가능
element = document.querySelector("div");
console.log(element);

// 3. 클래스 이름으로 선택 가능
// 어떤 클래스에 속한 태그가 여러개인 경우 가장 위의 것만 선택됨
element = document.querySelector(".g1");
console.log(element);

// 4. query에 해당되는 모든 태그를 선택하고자 하는 경우 querySelectorAll을 선택
element = document.querySelectorAll(".g1");
console.log(element);
