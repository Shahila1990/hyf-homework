const today = new Date();

const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

let day = weekday[today.getDay()];
console.log(`Today's day: ${day}`);

function getEventWeekday(days) {
  let days_left = days % 7;
  let d = new Date();
  let day = d.getDay();
  console.log(`Event Day: ${weekday[day + days_left]}`);
}

getEventWeekday(10);
