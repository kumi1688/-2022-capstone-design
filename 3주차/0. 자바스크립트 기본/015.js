// 객체 안을 반복문으로 돌고자 하는 경우
var store = { snack: 1000, flower: 5000, beverage: 2000 };

// 객체 안의 속성(Attribute)에 접근하고자 하는 경우
// store.snack
// store['snack']

for (var item in store) {
  console.log(item, store[item]);
}
