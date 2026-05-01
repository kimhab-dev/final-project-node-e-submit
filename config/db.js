const mysql = require('mysql2/promise');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASS,
    database: 'ecommerce'
});

module.exports = db;