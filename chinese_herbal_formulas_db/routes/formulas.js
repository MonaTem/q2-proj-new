const express = require('express');
const router = express.Router();
module.exports = router;
const axios = require('axios');
var cors = require('cors');
const app = require("express").Router({ mergeParams: true });
app.use(cors());

const queries = require('../db/queries');

const FORMULAS_URL = 'http://localhost:2000';

/*
  RESTful formulas
*/

const {
  createFormula,
  findFormulas,
  findFormula,
  updateFormula,
  destroyFormula
} = require("../models/formulas");


var submitBtn = document.getElementsByTagname("submit");
submitBtn.addEventListener('keydown', (event) => {
    document.getElementById("radio").addEventListener("click", function(e) {
          switch(e.target) {
            case 'add':
               const add = require('formulas/add/:fid');
               routes.use('/add', add);
               break;
            case 'update':
               const update = require('formulas/update/:fid');
               routes.use('/update', update);
               break;
            case 'delete':
               const erase = require('/formulas/delete/:fid');
               routes.use('/delete', erase);
               break;
            default:
          }
     });
   })


router.get('/formulas', (req,res) => {
  queries.formulas.getAll()
  .then(data => {
    res.json(data);
  });
});

router.get('/formulas/:fid', (req, res) => {
  queries.formulas.getOne(req.params.fid)
  .then(data => {
    res.json(data);
  });
});

/*

newForm.addEventListener('submit', (e) => {
  e.preventDefault(); // PREVENT DEFAULT ON FORM

  axios.post(`FORMULAS_URL/add`, {
    title: newForm.querySelector('#title').value,
    description: newForm.querySelector('#description').value
  }).then((response) => {
      const bird = response.data;
      const birdEl = document.createElement('div');

      birdEl.innerHTML = `<div>
       <h2>  ${bird.title} </h2>
        <p>  ${bird.description} </p>
     </div>`;

      birds.append(birdEl);

      newForm.reset();
    });

*/
/*
router.post('/formulas', (req, res) => {
  queries.formulas.create(req.body)
  .then(data => {
    res.json(data[0]);
  });
});
*/
router.put('/formulas/update/:fid', (req, res) => {
  let fid = req.params.fid;
  let english_name = req.params.english_name;
  let formula = req.body;
  queries.formulas.update(fid, formula)
  .then(data => {
    res.json(data[0]);
  });
});

router.delete('/formulas/delete/:fid', (req, res) => {
  queries.formulas.delete(req.params.fid)
  .then(() => {
    res.json({
      deleted: true
    });
  });
});
