const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


const morgan = require('morgan');
const PORT = 2000;

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(express.static('public'));

const formulas = require('./routes/formulas');

app.use(formulas);

app.listen(Port, function() {
  console.log("Listening on port 2000");
});
