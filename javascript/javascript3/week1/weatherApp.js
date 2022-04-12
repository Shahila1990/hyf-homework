/** @type {HTMLElement} */
const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutPut = document.querySelector(".date");
const time = document.querySelector(".time");
const condition = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloud = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const sunRise = document.querySelector(".sun-rise");
const sunSet = document.querySelector(".sun-set");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

let city = "London";

form.addEventListener("submit", (e) => {
  if (search.value.length == 0) {
    alert("Please type a city name");
  } else {
    city = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = ".5";
  }
  e.preventDefault();
});

function fetchWeatherData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d09e6b8bf67128a701c0f9da9000852d`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      temp.innerHTML =
        Math.round(parseFloat(data.main.temp) - 273.15) + "&#176;";

      condition.innerHTML = data.weather[0].main;
      nameOutput.innerHTML = data.name;

      //date
      const dt = data.dt;
      dateOutPut.innerHTML = new Date(dt * 1000).toDateString();
      
      //time
      const timezone = data.timezone;
      const timezoneInMinutes = timezone / 60;
      time.innerHTML = moment().utcOffset(timezoneInMinutes).format("h:mm A");

      cloud.innerHTML = data.clouds.all + "%";
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + "km/h";
      sunRise.innerHTML = moment
        .utc(data.sys.sunrise, "X")
        .add(timezone, "seconds")
        .format("HH:mm a");

      sunSet.innerHTML = moment
        .utc(data.sys.sunset, "X")
        .add(timezone, "seconds")
        .format("HH:mm a");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      //map
      
// function initMap(){
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
    });
}
