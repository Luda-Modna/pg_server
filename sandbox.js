const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: '2003',
  port: 5432,
};

const pool = new Pool(connectionOptions);

process.on('beforeExit', () => pool.end());

// promise then/catch
// pool
//   .query('SELECT * FROM users')
//   .then(res => console.log('res=>', res))
//   .catch(err => console.log(err));

//cb
// pool.query('SELECT CURRENT_DATE', (err, res) => {
//   if (!err) console.log(res.rows[0]);
// });

// promise async/await

// (async function () {
//   try {
//     const res = await pool.query('SELECT CURRENT_DATE');
//     console.log(res.rows[0]);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// const id = 1;

// (async () => {
//   try {
//     const user = await pool.query(`
//       SELECT *
//       FROM users
//       WHERE id = ${id}
//       `);
//       console.log('user=>',user.rows[0])
//   } catch (err) {
//     console.log(err);
//   }
// })();

// (async () => {
//   try {
//     const user = await pool.query(`
//       SELECT *
//       FROM users
//       WHERE id = $1
//       `, [id]);
//       console.log('user=>',user.rows[0])
//   } catch (err) {
//     console.log(err);
//   }
// })();

const fn = 'Petro1';
const ln = 'Petrenko1';

(async () => {
  try {
    const user = await pool.query(
      `
      SELECT *
      FROM users
      WHERE first_name = $1 AND last_name = $2
      `,
      [fn, ln]
    );
    console.log('user=>', user.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();

const user_id = 1;
const created_at = '2023-10-10';

(async () => {
  try {
    const order = await pool.query(
      `
     INSERT INTO orders (user_id, created_at)
     VALUES ($1, $2)
     RETURNING *
      `,
      [user_id, created_at]
    );
    console.log('order => ', order.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();

class User {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      const insertQuery = `
       INSERT INTO users (first_name, last_name, email, tel)
       VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
       RETURNING *
        `;
      const crreatedUser = await pool.query(insertQuery);
      return crreatedUser.rows[0];
    } catch (err) {
      console.log(err);
    }
  }

  static getAll ({ limit, offset }) {}
  static getById (id) {}
  static updateById (id, { firstName, lastName, email, tel }) {}
  static deleteById (id) {}
}

const newUser = {
  firstName: 'Miki',
  lastName: 'Mik',
  email: 'mail@mail.com',
  tel: '+380123456789',
};

const createdUser = User.create(newUser).then(data => console.log(data));
