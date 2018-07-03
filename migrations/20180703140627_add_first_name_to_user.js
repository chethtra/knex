
exports.up = function(knex, Promise) {
  return knex.schema.table('users',(t)=>{
      t.string('first_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user',(t)=>{
    t.dropColumn('first_name');
  })
};
