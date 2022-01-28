exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: 'sam' , password: '$2a$08$3wpnFAw9tv5CNNe0CZPAGeP1ffqs2wjFxDxmk.7Z.Os/4n23AcsTK'},
        ]);
      });
  };
  