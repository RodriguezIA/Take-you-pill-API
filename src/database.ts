import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    host: process.env.DB_HOST
});


pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is conected');
    })

export default pool;