console.log('Script loaded');

const products = getAvailableProducts();
const ul = document.querySelector('ul');

//console.log(ul);
console.log(products);

function renderProducts(product) {
  product.forEach((product) => {
    const li = document.createElement('li');

    li.innerHTML = `
            <ul>
                <li><strong>${product.name}</strong></li>
                <li>Price: ${product.price}</li>
                <li>Rating: ${product.rating}</li>
                
            </ul>
        `;
    ul.appendChild(li);
  });
  
}
renderProducts(products);
const li = document.querySelectorAll("li")


// console.log(ul)
console.log(products);
const searchBar = document.getElementById('search-item');
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filterProduct = products.filter((product) => {
    if (product.name.toLowerCase().indexOf(searchString)==0){
      console.log(product);
     
      return product;
    }
       
   });

  // const filterProduct = []
  // for(let i=0;i<products.length; i++){
  //   let names = products[i].name.toLowerCase()
  //   if(names.includes(searchString)){
  //     filterProduct.push(products[i])
  //   }
  // }
  renderProducts(filterProduct);
  console.log(searchString);
  //console.log(filterProduct)
});
  
console.log(ul)


