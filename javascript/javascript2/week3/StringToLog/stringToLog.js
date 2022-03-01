//1. Log out the text Called after 2.5 seconds
setTimeout(function(){
  console.log('Hi there')
},2500)

//2.Create a function that takes 2 parameters: delay and stringToLog
function delayInLogout(delay, stringToLog){
    setTimeout(function () {
      //const delayInSec = delay * 1000;
      console.log(stringToLog);
    }, (delay*1000));
}
delayInLogout(5,'This string logged after 5 second');
delayInLogout(3,'This string logged after 3 second');

//3.Call after 5 seconds after the button is clicked.
const btn = document.getElementById("btn");
btn.addEventListener('click', ()=>{
    delayInLogout(5, 'This string logged after 5 second');
})

//4.logout Earth and Saturn
const earthLogger = function () {
  console.log('Earth');
};
const saturnLogger = function () {
  console.log('Saturn');
};
function planetLogFunction(callback){
  callback()
}
planetLogFunction(saturnLogger);
planetLogFunction(earthLogger);

//5.location (latitude, longitude) of the user
const x = document.getElementById('demo')
const lctbtn = document.getElementById('lctbtn');
lctbtn.addEventListener('click', function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
  }
  else{
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
})
function showPosition(position){
  x.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
}

//6.show that location on a map 
// let map;
// function initMap(){
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

//7.runAfterDelay
function runAfterDelay(delay,callback){
  setTimeout(function () {
    callback();
  }, (delay*1000));
}
runAfterDelay(4, function(){
  console.log('Should be logged after 4 seconds');
})

//8. let numClicks = 0;
let numClicks = 0;
const handleClick = () => {
  numClicks++;
  if (numClicks === 1) {
    singleClickTimer = setTimeout(() => {
      numClicks = 0;
      console.log("single click!");
    }, 500);
  } else if (numClicks === 2) {
    clearTimeout(singleClickTimer);
    numClicks = 0;
    console.log("double click!");
  }
};
document.addEventListener("click", handleClick);

//9.funny jokes & bad jokes
function funnyJokes(){
  console.log(`Why do bees hava sticky hair? 
  Bcoz they use honeycomb`);
}
function badJokes(){
  console.log(`What do you call a can opener that doesn't work? 
  A can't opener`);
}
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if(shouldTellFunnyJoke){
    logFunnyJoke()
  }
  else{
    logBadJoke()
  }
}
jokeCreator(true,funnyJokes,badJokes)
jokeCreator(false,funnyJokes,badJokes)



