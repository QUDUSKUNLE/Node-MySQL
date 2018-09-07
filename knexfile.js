const dotenv = require('dotenv');

dotenv.config();

/**
 * Database configuration
 * run knex migarte:make create_user_table 
 * to generate migartion file
 */
module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'password',
    database: 'database_name'
  }
}
