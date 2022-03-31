// 객체
var family = {
  address: "Seoul",
  node: [1, 2, 3],
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  printFamily: function () {
    console.log(this.members);
  },
};

// 객체 접근
const attribute = "address";
console.log(family.address);
console.log(family["address"]);
console.log(family[attribute]);

// 객체 함수 사용
family.addFamily(10, "ann", "mom");
family.printFamily();
