//array with 3 functions
const funcArray = [
  function () {
    console.log(`Hi! I'm function one`);
  },
  function () {
    console.log(`Hi! I'm function two`);
  },
  function () {
    console.log(`Hi! I'm function three`);
  },
];
for(let i = 0; i<funcArray.length; i++){
    funcArray[i]();
}

//Create a function as a const and try creating a function normally
const func = function(a,b){
   console.log(a+b);
}
func(4,5)

function add(x,y){
    console.log(x+y);
}
add(4,5)

const funct = function(){
    console.log(`Hi there. I'm a function as a const`);
}
funct()

function normalfunc(){
    console.log(`Hi there. I'm a normal function`);
}
normalfunc()


//Create an object that has a key whose value is a function
myArray = [
  'Hi there',
  {
    name: 'jack',
    age: 43,
  },
  [1, 2, 3, 4],
  (myFunction = function () {
    console.log("What's up!");
  }),
  
];
console.log(myArray);
myArray[3]();