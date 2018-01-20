const knex = require("../db");

// CREATE A symptom
/*
function createsymptom({ body: { symptom, description } }) {
  return knex("symptoms")
    .returning("*")
    .insert({ symptom, description });
}
*/
// CREATE A symptom
function createsymptom({params: { plan_sid }, body: { symptom} }) {
  return knex("symptoms")
    .returning("*")
    .insert({ symptom,  formula_fid });
}


// Find all
// function findsymptoms() {
  // return knex("symptoms");
// }

// Find all
function findsymptoms({params: {formulas_fid}}) {
  return knex("symptoms").where({formulas_fid});
}

// Find one
function findsymptom({ params: { sid } }) {
  return knex("symptoms").where("sid", sid);
}

// Update
function updatesymptom({ params: { sid }, body: { symptom} }) {
  return knex("symptoms")
    .where("sid", sid)
    .returning("*")
    .update({ symptom, description });
}

// Destroy
function destroysymptom({ params: { sid } }) {
  return knex("symptoms")
    .where("sid", sid)
    .del();
}

module.exports = {
  createsymptom,
  findsymptoms,
  findsymptom,
  updatesymptom,
  destroysymptom
};
