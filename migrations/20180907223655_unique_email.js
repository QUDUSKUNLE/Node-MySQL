
exports.up = async function(knex) {
  await knex.schema.table('users', t => {
    t.string('email').notNullable().comment('This is the email field')
  })
};

exports.down = async function(knex) {
  await '';
};
