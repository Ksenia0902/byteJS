
const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const shopItems = (productList) => {
  const shop = document.createElement('div');

  productList.forEach((item) => {
    const productContainer = document.createElement('div');
    const productName = document.createElement('h3');
    const productBrand = document.createElement('h4');
    const productPrice = document.createElement('h4');
    const productProp = document.createElement('ul');

    item.properties.forEach((prop) => {
      const propertyList = document.createElement('li');
      propertyList.innerText = prop;

      productProp.append(propertyList)
    })

    productName.innerText = item.name;
    productBrand.innerText = item.brand;
    productPrice.innerText = item.price;

    productContainer.append(productName, productBrand, productPrice, productProp)

    shop.append(productContainer)
  });
  
  document.body.append(shop)
}

const shopItems2 = (productList) => {

  const shop = document.createElement('div');

  shop.innerHTML = `
  ${productList
      .map((product) => {
        return `
      <h3>${product.name}</h3>
      <h4>${product.brand}</h4>
      <h4>${product.price}</h4>
      <ul>${product.properties
            .map((property) => {
              return `
          <li>${property}</li>`
            })
            .join('')}
      </ul>`

      })
      .join('')}`
  document.body.append(shop)
}

// shopItems(products)
shopItems2(products)

