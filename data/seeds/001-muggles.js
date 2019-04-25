
exports.seed = function(knex, Promise) {
  return knex('muggles')
    .truncate()
    .then(function () {
      return knex('muggles').insert([
        {name: 'harry'},
        {name: 'hermione'},
        {name: 'ronald'},
        {name: 'dumbledore'},
      ]);
    });
};
