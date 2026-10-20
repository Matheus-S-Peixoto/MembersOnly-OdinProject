import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DBURL,
});

async function logData() {
  const { rows } = await pool.query('SELECT current_database(), current_user;');
  console.log(rows);
};
logData();

const query = async (text, params) => {
  return pool.query(text, params);
};

export { pool, query };