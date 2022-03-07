const express = require('express');
const app = express();


app.get('/numbers/add', (req, res) => {
  const { first, second } = req.query;
  const add = Number(first) + Number(second);
  if(!first || !second){
   return res.status(404).json('Please provide two numbers fx. add?first=3&second=7');
  }
  //res.send(`${add}`)
  return res.json(add)
});

app.get('/numbers/multiply/:first/:second', (req, res) => {
  const { first, second } = req.params;
  const multiply = Number(first) * Number(second);
  if (!first || !second) {
    return res
      .status(404)
      .json('Please provide two numbers fx. add?first=3&second=7');
  }
  return res.json(multiply);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
