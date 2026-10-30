import { query } from '../db/pool.js';

export const findByUsername = async (username) => {
  const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [username]);

  if (rows.length === 0) {
    return false;
  }

  return rows[0].username === username;
};

export const createNewUser = async (prefname, username, password) => {
  await query(`INSERT INTO users (username, password, prefname) VALUES ($1, $2, $3)`, [
    username,
    password,
    prefname,
  ]);
};
