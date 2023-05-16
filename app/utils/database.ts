import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: 'tsliqnxd',
    password: 'vPkLhyoHEWSTaVmA3m44cEf8QzLeybXY',
    host: 'lucky.db.elephantsql.com',
    port: 5432,
    database: 'tsliqnxd',
    ssl: true,
  });
}

export { conn };