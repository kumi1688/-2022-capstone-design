// ES6에서 추가된 기능
// let으로 변수 선언 가능. let은 값 재할당 가능
// let은 block scope를 가지고 있음
// var는 function scope를 가지고 있음

if (true) {
  var functionScopeValue = "global";
  let blockScopeValue = "local";
}
console.log(functionScopeValue);
console.log(blockScopeValue);
