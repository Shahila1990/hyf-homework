const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

//Paint a circle to a canvas element
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//Class creation time!
class Circle {
  constructor(x, y, radius, start, end, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.start = start;
    this.end = end;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.start, this.end);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
}

const c1 = new Circle(100, 150, 20, 0, 2 * Math.PI, "orange");
const c2 = new Circle(200, 150, 40, 0, 2 * Math.PI, "green");
const c3 = new Circle(300, 250, 60, 0, 2 * Math.PI, "blue");
c1.draw();
c2.draw();
c3.draw();

//Now lets make art!
function randomX(){
    return Math.floor(Math.random() * window.innerWidth)
}
function randomY() {
  return Math.floor(Math.random() * window.innerHeight);
}
function randomRadius(){
    return Math.floor(Math.random()*100)
}

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
//console.log(randColor());

setInterval(()=>{
    const c4 = new Circle(randomX(), randomY(), randomRadius(), 0, 2 * Math.PI, randColor())
    c4.draw()
},100)

//Follow the mouse - optional
window.addEventListener("mousemove", (e)=>{
    const c5 = new Circle(
      e.clientX,
      e.clientY,
      randomRadius(),
      0,
      2 * Math.PI,
      randColor()
    );
    c5.draw()
})