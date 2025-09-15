class User {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      const insertQuery = `
         INSERT INTO users (first_name, last_name, email, tel)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
      const values = [firstName, lastName, email, tel];
      const createdUser = await User.pool.query(insertQuery, values);
      return createdUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
          SELECT *
          FROM users
          ORDER BY id
          LIMIT $1 OFFSET $2
        `;
      const values = [limit, offset];
      const foundUsers = await User.pool.query(selectAllQuery, values);
      return foundUsers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getById (id) {
    try {
      const selectQuery = `
      SELECT *
      FROM users
      WHERE id = ${id}
    `;
      const foundUsers = await User.pool.query(selectQuery);
      return foundUsers.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async updateById (id, { firstName, lastName, email, tel }) {
    try {
      const insertQuery = `
       INSERT INTO users (first_name, last_name, email, tel)
       VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
       WHERE id = ${id}
       RETURNING *
        `;
      const updatedUser = await User.pool.query(insertQuery);
      return updatedUser.rows[0];
    } catch (err) {
      console.log(err);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
      DELETE
      FROM users
      WHERE id = ${id}
      RETURNING *
    `;
      const deletedUser = await User.pool.query(deleteQuery);
      return deletedUser.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
}

module.exports = User;
