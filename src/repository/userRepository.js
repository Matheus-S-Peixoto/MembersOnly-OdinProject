import { query } from '../db/pool.js';

export const findByUsername = async (username) => {
  const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [username]);
  return rows[0];
};

export const findById = async (id) => {
  const { rows } = await query(`SELECT * FROM users WHERE id = $1`, [id]);
  return rows[0];
};

export const isUsernameInUse = async (username) => {
  const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [username]);
  return rows[0]?.username === username;
};

export const createNewUser = async (prefname, username, password) => {
  await query(`INSERT INTO users (username, password, prefname) VALUES ($1, $2, $3)`, [
    username,
    password,
    prefname,
  ]);
};

export const updateSetAdminTrue = async (id) => {
  await query(`UPDATE users SET isAdmin = true WHERE id = $1`, [id]);
};

export const updateMembershipTrue = async (id) => {
  await query(`UPDATE users SET ismember = true WHERE id = $1`, [id]);
};
