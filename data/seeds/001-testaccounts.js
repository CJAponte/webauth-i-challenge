
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin', password: 'password'},
        {id: 2, username: 'user', password: 'password'}
      ]);
    });
};
