const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password: 'rbsingh@123'  
});

module.exports = pool.promise();