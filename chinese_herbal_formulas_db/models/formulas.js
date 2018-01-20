const knex = require("../db");

// CREATE
function createformula({ body: { title } }) {
  return knex("formulas")
    .returning("*")
    .insert({ title, });
}

// Find all
function findformulas() {
  return knex("formulas");
}

// Find one
function findformula({ params: { id } }) {
  return knex("formulas").where("id", id);
}

// Update
function updateformula({ params: { id }, body: { title, archived } }) {
  return knex("formulas")
    .where("id", id)
    .returning("*")
    .update({ title, archived });
}

// Destroy
function destroyformula({ params: { id } }) {
  return knex("formulas")
    .where("id", id)
    .del();
}

module.exports = {
  createformula,
  findformulas,
  findformula,
  updateformula,
  destroyformula
};
