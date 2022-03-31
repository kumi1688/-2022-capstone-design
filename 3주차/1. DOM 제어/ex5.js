const products = [
  { id: "p-01", name: "상품1" },
  { id: "p-02", name: "상품2" },
  { id: "p-03", name: "상품3" },
];

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.id = product.id;
  productElement.name = product.name;
  productElement.innerHTML = product.name;
  document.body.appendChild(productElement);
});
