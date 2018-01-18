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

if (ON_FORMULAS) {
   var submitBtn = document.getElementsByTagname("submit");
   submitBtn.addEventListener('keydown', (event) => {
       const keyName = event.key;
       document.getElementById("radio").addEventListener("click", function(e) {
          switch(e.target) {
            case 'add':
             break;
            case 'change':
             break;
            case 'delete':
             break;
            default:
          }
     });
   });
}


app.listen(Port, function() {
  console.log("Listening on port 2000");
});
