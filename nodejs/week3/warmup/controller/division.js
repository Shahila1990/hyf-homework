const division = (req, res) => {
  const { firstParam, secondParam } =
    'firstParam' in req.query ? req.query : req.body;
  

  const params = [];
  params.push(firstParam, secondParam);
  const divide = params
    .flat(2)
    .map((i) => Number(i))
    .reduce((a, b) => a / b);

  if (isNaN(divide)) {
    return res.status(400).json('Please provide valid numbers');
  }
  res.json(divide);
};

module.exports = division;
