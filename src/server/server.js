const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 8000;
const table = 'calculations';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB
});

app.listen(port, () => {
  console.log(`App server listening to port ${ port }`);
});

app.get('/api/calculations', (req, res) => {
  pool.query(`select * from ${ table }`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});