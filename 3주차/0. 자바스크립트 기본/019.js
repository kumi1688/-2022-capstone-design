// null은 변수를 선언하고 개발자가 의도적으로 빈 값을 할당한 상태 (빈 객체)
// null은 객체로 취급됨
var value1 = null;
console.log(value1);
console.log(typeof value1);

// undefined는 변수가 선언되어 있지만 아무 값도 할당받지 않은 상태(의도치 않은 경우)
// undefined는 자료형이 아예 없는 상태. 객체로 취급되지도 않음. null보다 불안정함
var value2 = undefined;
console.log(value2);
console.log(typeof value2);

console.log(null == undefined);
