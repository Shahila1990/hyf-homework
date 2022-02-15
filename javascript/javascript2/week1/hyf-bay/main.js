console.log('Script loaded');

const products = getAvailableProducts();
const ul = document.querySelector('ul');

//console.log(ul);
console.log(products);

function renderProducts(product) {
  products.forEach((product) => {
    const li = document.createElement('li');

    li.innerHTML = `
            <ul>
                <h2>${product.name}</h2>
                <li>Price: ${product.price}</li>
                <li>Rating: ${product.rating}</li>
                
            </ul>
        `;
    ul.appendChild(li);
  });
}

renderProducts(products);
