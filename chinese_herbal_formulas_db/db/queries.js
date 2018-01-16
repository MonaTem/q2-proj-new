const knex = require('./knex');

module.exports = {
  formulas: {
    getAll: function() {
      return knex('formulas');
    },
    getOne: function(fid) {
      return knex('formulas')
             .where('fid', fid);
    },
    create: function(formulas) {
      return knex('formulas')
             .insert(formulas)
             .returning('*');
    },
      update: function(fid, formulas) {
        return knex('formulas')
               .where('fid', fid)
               .update(formulas)
               .returning('*');
    },
      delete: function(fid) {
        return knex('formulas')
               .where('fid', fid)
               .del();
    }
  }
};
