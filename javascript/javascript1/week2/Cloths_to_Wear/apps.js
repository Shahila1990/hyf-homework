function cloths_to_Wear(temp) {
  if (temp < 18) {
    return `It's freezing!! Wear fleece jacket and jeans`;
  } else if (temp >= 18 && temp < 30) {
    return `Normal outfit would be fine! How about shorts and a t-shirt`;
  } else if (temp >= 30) {
    `It's hot outside. Wear a sleeveless blouse and shorts`;
  }
}

const clothesToWear = cloths_to_Wear(25);
console.log(clothesToWear);
