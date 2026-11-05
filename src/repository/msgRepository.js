import { query } from '../db/pool.js';

export const insertNewMessage = async (id, content) => {
  await query(`INSERT INTO messages (user_id, content) VALUES ($1, $2)`, [id, content]);
};

export const selectAllMessages = async () => {
  const { rows } = await query(`
    SELECT
      m.m_id,
      m.content,
      m.posted_at,
      u.username
    FROM messages m
    JOIN users u ON m.user_id = u.id
    ORDER BY m.posted_at DESC
    `);
  return rows;
};

export const deleteMessage = async (msgId) => {
  await query(`DELETE FROM messages WHERE m_id = $1`, [msgId]);
};
