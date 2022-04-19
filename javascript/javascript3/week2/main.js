/*  1. Create an array of bad movies
    2. Create an array of bad movies since year 2000 */

fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    const badMovies = movies.filter((movie) => movie.rating < 5);
    console.log(badMovies);
    const badMovies_2000 = badMovies.filter((movie) => movie.year >= 2000);
    console.log(badMovies_2000);
  });

/* Promise that resolves after set time */
//using promise
function resolveAfter(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time * 1000);
  });
}
resolveAfter(8).then(() => {
  console.log("logged after 8 secs");
});

//using async/await
async function resolveAfterAysc(time) {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time * 1000);
  });
}
resolveAfterAysc(10).then(() => {
  console.log("logged after 10 secs");
});

/* Rewrite time */
//setTimeOut
function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("logged after 3secs");
});

//GeoLocation
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

/* Fetching and waiting */
//using Promise
function fetchPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch("https://cataas.com/api/cats?tags=cute"));
    }, time);
  });
}
fetchPromise(3000)
  .then((res) => res.json())
  .then((data) => console.log(data));

//async/await
function timeOut(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function asyncFetch() {
  // the async/await method
  // could not use settimeOut inside async/await
  try {
    await timeOut(3000);
    const response = await fetch("https://cataas.com/api/cats?tags=cute", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
asyncFetch();

/* Visual Promise */

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");


const promise = new Promise((resolve, reject) => {
  const result = translateOneByOne();
  resolve(result);
});

promise.then(() => {
  setTimeout(() => {
    translateAllAtOnce();
  }, 2000);
});

async function translateOneByOne() {
  try {
    await moveElement(redBox, {
      x: 20,
      y: 300,
    });
    await moveElement(blueBox, {
      x: 400,
      y: 300,
    });
    await moveElement(greenBox, {
      x: 400,
      y: 20,
    });
    
    redBox.style.transform = "none";
    blueBox.style.transform = "none";
    greenBox.style.transform = "none";
  } catch (error) {
    console.log("oops! error", error);
  }
}

function translateAllAtOnce() {
  const promise1 = moveElement(redBox, { x: 20, y: 300 });
  const promise2 = moveElement(blueBox, { x: 400, y: 300 });
  const promise3 = moveElement(greenBox, { x: 400, y: 20 });
  Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log("well done");
    })
    .catch((error) => {
      console.log("something went wrong,", error);
    });
}
 


