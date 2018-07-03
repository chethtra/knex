
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'gabe1', password: 'password', first_name: 'gabe'},
        {id: 2, username: 'mary2', password: 'password', first_name: 'mary'},
        {id: 3, username: 'chet3', password: 'password', first_name: 'chet'}
      ]);
    });
};
