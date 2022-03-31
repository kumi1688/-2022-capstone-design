// 함수 선언
function greeting() {
  console.log("hello");
}

// 변수에 함수 할당 가능
var greeting2 = function () {
  console.log("greeting2");
};

// ES6 버전
var greeting3 = () => {
  console.log("greeting3");
};

// 함수 실행
greeting();
greeting2();
greeting3();
