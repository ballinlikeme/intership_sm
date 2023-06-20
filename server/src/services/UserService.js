import { pool } from "../database/index.js";

class UserService {
  async getUserByUsername(username) {
    return (
      await pool.query(`SELECT * FROM users WHERE username = $1`, [username])
    ).rows;
  }

  async createUser(username, hashedPassword, name, surname, age) {
    const query = await pool.query(
      `INSERT INTO users (username, password, name, surname, age) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [username, hashedPassword, name, surname, age]
    );
    return query.rows[0];
  }

  async deleteUser() {}
}

export const userService = new UserService();
