const knex = require("../db");

// CREATE
function createformula({ body: { english_name } }) {
  return knex("formulas")
    .returning("*")
    .insert({ english_name, pinyin_name});
}

// Find all
function findformulas() {
  return knex("formulas");
}

// Find one
function findformula({ params: { fid } }) {
  return knex("formulas").where("fid", fid);
}

// Update
function updateformula({ params: { fid }, body: { english_name, pinyin_name } }) {
  return knex("formulas")
    .where("fid", fid)
    .returning("*")
    .update({ english_name, pinyin_name});
}

// Destroy
function destroyformula({ params: { fid } }) {
  return knex("formulas")
    .where("fid", fid)
    .del();
}

module.exports = {
  createformula,
  findformulas,
  findformula,
  updateformula,
  destroyformula
};
