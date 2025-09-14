const { Pool } = require('pg');
const User = require('./users.js');
const Phone = require('./phone.js');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: '2003',
  port: 5432,
};

const pool = new Pool(connectionOptions);

process.on('beforeExit', () => pool.end());

User.pool = pool;


module.exports = { User, Phone };
