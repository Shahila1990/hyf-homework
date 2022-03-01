const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let input = document.getElementById('input').value;
  setTimeout(() => {
      
  }, input * 1000);
});



let countL = 0;
let countS = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'l') {
    countL++;
    document.getElementById('lCount').innerHTML = `${countL}`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 's') {
    countS++;
    document.getElementById('sCount').innerHTML = `${countS}`;
  }
});