const express = require('express');
const router = express.Router();
module.exports = router;

const queries = require('../db/queries');


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
const FORMULAS_URL = 'http://localhost:2000/formulas';
/*

newForm.addEventListener('submit', (e) => {
  e.preventDefault(); // PREVENT DEFAULT ON FORM

  axios.post(`BIRDS_URL/add`, {
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
