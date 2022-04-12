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

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 
  setInterval(() => {
    const date = new Date();
    const month = date.getMonth();
    const newDate = date.getDate();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const finalMinutes = minutes <= 10 ? "0" + minutes : minutes;
    const year = date.getFullYear();
    const ampm = hour >= 12 ? "PM" : "AM";
    time.innerHTML =
      hour + ":" + finalMinutes + ` <span id="am-pm">${ampm}</span>`;
   
  }, 1000);



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
      const dt = data.dt
       dateOutPut.innerHTML = new Date(dt*1000).toDateString()
      
      cloud.innerHTML = data.clouds.all + "%";
      humidity.innerHTML =data.main.humidity + "%"
      wind.innerHTML = data.wind.speed + "km/h"
      sunRise.innerHTML = new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString();
      
      sunSet.innerHTML = new Date(data.sys.set * 1000).toLocaleTimeString();
      icon.src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    });
}
