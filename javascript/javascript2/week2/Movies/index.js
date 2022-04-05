//1.Short Title Movie
const shortTitle = movies
  .filter((movie) => movie.title.length <= 10)
  .map((movie) => movie.title);
console.log(shortTitle);

//2.Long title movie
const longTitle = movies
  .filter((movie) => movie.title.length > 10)
  .map((movie) => movie.title);
console.log(longTitle);

//3.Count of movies between 1980-1989
const total = movies.filter(
  (movie) => movie.year <= 1989 && movie.year >= 1980
);
console.log(`There were ${total.length} movies realized between 1980-1989`);

//4.Good Average Bad
const rating = movies.forEach((movie) => {
  if (movie.rating >= 7) {
    return (movie.tag = 'Good');
  } else if (movie.rating >= 4 && movie.rating < 7) {
    return (movie.tag = 'Average');
  } else {
    return (movie.tag = 'Bad');
  }
});
console.log(movies);

//5.movies rated higher than 6
const goodMovie = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.title);
console.log(goodMovie);

//6.Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const titleArray = movies.map((movie)=> movie.title)
console.log(titleArray);

const surfer = titleArray.filter(
  (title) =>
    title.match(/surfer/gi) || title.match(/alien/gi) || title.match(/benjamin/gi)
);
console.log(surfer)
console.log(`number of movies containing any of following keywords: Surfer, Alien or Benjamin: ${surfer.length}`)

//7.Array of movies where a word in the title is duplicated
const titleToArray = titleArray.filter((word,index)=>titleArray.indexOf(word)!= index)
console.log(`titleToArray: ${titleToArray} ,
count: ${titleToArray.length}`);




//8.Calculate the average rating of all the movies using reduce.
const rates= movies.map((movie)=> movie.rating)
//console.log(rates);
const averageRates = rates.reduce((a,b)=> a+b,0)/rates.length
const averageRating = averageRates.toFixed(2)

console.log(`Average Movie Rating: ${averageRating}`);

//9.Count the total number of Good, Average and Bad movies using reduce
const totalArray = movies.reduce(
  (total, item) => {
    if (item.tag === 'Good') {
      total.GoodMovies += 1;
    } else if (item.tag === 'Average') {
      total.AverageMovies += 1;
    } else {
      total.BadMovies += 1;
    }
    return total;
  },
  { GoodMovies: 0, AverageMovies: 0, BadMovies: 0 }
);
console.log(totalArray);

