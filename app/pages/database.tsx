import { Pool } from 'pg';


export async function getResults() {
  const dbConfig = new Pool({
    user: 'tsliqnxd',
    password: 'vPkLhyoHEWSTaVmA3m44cEf8QzLeybXY',
    host: 'lucky.db.elephantsql.com',
    port: 5432,
    database: 'tsliqnxd',
  });

  await dbConfig.connect();
  const res = await dbConfig.query('SELECT * FROM match');
  console.log(res.rows[0]);
  return res.rows;
}

