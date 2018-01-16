const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const formulas = require('./routes/formulas');


app.use(formulas);



app.listen(2000, function() {
  console.log("Listening on port 2000");
});
