const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'ecom',
  password: 'rbsingh@123'  
});

module.exports = pool.promise();