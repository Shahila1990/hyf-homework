//Add Candy
let boughtCandyPrices = [];
function addCandy(candyType, weight) {
  let price;
  switch (candyType) {
    case 'Sweet':
      price = 0.5 * weight;
      break;
    case 'Chocolate':
      price = 0.7 * weight;
      break;
    case 'Toffee':
      price = 1.1 * weight;
      break;
    case 'Chewing-gum':
      price = 0.03 * weight;
      break;
  }
  boughtCandyPrices.push(price);
}

addCandy('Sweet', 20);
addCandy('Chocolate', 30);
addCandy('Toffee', 20);
addCandy('Toffee', 20);

addCandy('Chewing-gum', 40);
addCandy('Chewing-gum', 40);
// addCandy('Chewing-gum', 40);


// console.log(`${boughtCandyPrices}`);

let amountToSpend = Math.floor(Math.random() * 100);


//Buy more Candy

function canBuyMoreCandy(boughtCandy){
    let total = 0;
    for(let i = 0; i < boughtCandy.length; i++){
        total += boughtCandy[i];
       
    }
     console.log(`your total is: ${total}$`);
    if(total < amountToSpend){
        return true;
    }
    
}

console.log(`You have an amout of ${amountToSpend}$ to spend`);

const isTrue = canBuyMoreCandy(boughtCandyPrices);


if(isTrue){
    console.log(`"You can buy more, so please do!". If`);
}
else{
    console.log(`Enough candy for you!`);
}





