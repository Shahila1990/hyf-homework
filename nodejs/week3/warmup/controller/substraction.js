const subtraction = (req, res) => {
  const { firstParam, secondParam } =
    'firstParam' in req.query ? req.query : req.body;

  const params = [];
  params.push(firstParam, secondParam);
  const substract = params
    .flat()
    .map((i)=>Number(i))
    .reduce((a, b) => a - b);

  if (isNaN(substract)) {
    return res.status(400).json('Please provide valid numbers');
  }
  res.json(substract);
};

module.exports = subtraction;
