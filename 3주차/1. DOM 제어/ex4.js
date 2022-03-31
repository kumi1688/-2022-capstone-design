const product = { id: "p-01", name: "상품1" };

const productElement = document.createElement("div");
productElement.id = product.id;
productElement.name = product.name;
productElement.innerHTML = "새롭게 생성한 상품1";

document.body.appendChild(productElement);
