
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',(t)=>{
      t.increments('id').unsigned().primary();
      t.string('username').notNullable();
      t.string('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
