const seriesDurations = [
  {
    title: 'Friends',
    days: 6,
    hours: 15,
    minutes: 0,
  },
  {
    title: 'the Good Doctor',
    days: 9,
    hours: 22,
    minutes: 38,
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
  let lifeSpanInMinutes = 80 * 365.25 * 24 * 60;

  let totalPercentage = 0.0;
  for (let i = 0; i < seriesDurations.length; i++) {
      let series = seriesDurations[i]
      let durationInMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      let percentage = ((durationInMinutes / lifeSpanInMinutes) * 100).toFixed(3);
      console.log(`${series.title} took ${percentage} % of my life`);
      totalPercentage = (totalPercentage*10 + percentage*10)/10; 
  }
console.log(`Intotal that is ${totalPercentage} of life time`)
}

logOutSeriesText(); // logs out the text found above
