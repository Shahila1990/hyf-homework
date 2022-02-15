const activities = [];
const limit = 120;

function addActivities(date, activity, duration) {
  let _activity = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(_activity);
}

addActivities('23/7-18', 'Youtube', 50);
addActivities('23/7-18', 'Youtube', 10);
console.log(activities);

function showStatus(activity) {
  let totalActivity = activity.length;
  let totalDuration = 0;
  for(let i=0; i<totalActivity; i++){
      totalDuration = totalDuration + activity[i].duration
  }
  if (totalActivity == 0) {
    console.log(`Add some activities before calling showStatus`);
  } else if(totalDuration<limit) {
    console.log(
      `You have added ${totalActivity}. They amount to ${totalDuration} min. of usage. You have ${limit - totalDuration} mins more to use phone`
    );
  }
  else{
      console.log(`You have reached your limit, no more smartphoning for you!`);
  }
}

showStatus(activities);
