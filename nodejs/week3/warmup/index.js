const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const addition = require('./controller/addition');
const substraction = require('./controller/substraction');
const multiplication = require('./controller/multiplication');
const division = require('./controller/division');

/* GET METHOD */
app.get('/', (req, res) => res.send('nodejs week3 homework'));
app.get('/calculator/add', addition);
app.get('/calculator/substraction', substraction);
app.get('/calculator/multiplication', multiplication);
app.get('/calculator/division', division);

/* POST METHOD */
app.post('/calculator/add', addition);
app.post('/calculator/substraction', substraction);
app.post('/calculator/multiplication', multiplication);
app.post('/calculator/division', division);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
