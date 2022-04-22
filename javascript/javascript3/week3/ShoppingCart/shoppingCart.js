class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product)

  }

  removeProduct(product) {
    // Implement functionality here
    this.products.pop(product)
  }

  searchProduct(productName) {
    // Implement functionality here
    const arrayOfprod = this.products
      .map((product) => product.name)
      .filter((name) => name.includes(productName));
    console.log(arrayOfprod);
  }

  getTotal() {
    // Implement functionality here
   const totalPrice= this.products.reduce((total, product) => total + product.price,0 )
      console.log(totalPrice);
      return totalPrice;
  }

  renderProducts() {
    // Implement functionality here
    const ulElement = document.createElement("ul");
    this.products.forEach((product) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = product.name;
      ulElement.appendChild(liElement);
    });
    document.getElementById("shopping").appendChild(ulElement);
    
  }

  getUser(user) {
    // Implement functionality here
    fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 7000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
//shoppingCart.removeProduct(laptop);
shoppingCart.getTotal()
console.log(shoppingCart);
shoppingCart.searchProduct('tv')
shoppingCart.renderProducts()
shoppingCart.getUser(2)

