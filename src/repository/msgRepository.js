import { query } from '../db/pool.js';

export const insertNewMessage = async (id, content) => {
  await query(`INSERT INTO messages (user_id, content) VALUES ($1, $2)`, [id, content]);
};
