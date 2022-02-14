const yearOfBirth = 1990;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth ;
console.log('You will be ' + age + 'years old in ' + yearFuture); 


// Dog's Age
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = 7 * humanYear;

let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears==true){
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);

}
else{
  console.log(`Your dog will be ${humanYear} dog years old in ${dogYearFuture}`);
}



//housey pricey
const width = [8,5];
const depth = [10,11];
const height = [10, 8]

const peterVolume =width[0]*depth[0]*height[0];
const julieVolume = width[1] * depth[1] * height[1];
// console.log(peterVolume);

const volumeInMeters =[peterVolume,julieVolume];
const gardenSizeInM2 =[100, 70];

const housepricePeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300; 
const housepriceJulie =volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

const housePrice = [housepricePeter,housepriceJulie];

//peter
if(housePrice[0]>2500000){
    console.log('perter is paying low');

}else{
    console.log('peter is paying high');
}

//julie
if (housePrice[1] > 1000000) {
  console.log('julie is paying low');
} 
else {
  console.log('julie is paying high');
}

//Ez Namey

const firstWords =['Easy', 'Tech', 'creative', 'money', 'computer', 'brainey', 'magic', 'pretty', 'awsome', 'green'];
const secondWords = ['private', 'studio', 'corporate', 'community', 'corner','future' , 'hacker', 'station', 'world', 'public'];
const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber]

const numOfChar = startupName.length;
console.log(`The Startup: "${startupName}" contains ${numOfChar}`);

