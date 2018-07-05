
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (t)=>{
    t.string('last_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (t)=>{
    t.dropColumn('last_name')
  })
};
