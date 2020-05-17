const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const path = require('path');
const dbConfig = require('../db/db-config');

const app = express();
const table = 'calculations';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PW,
  database: dbConfig.DB
  port: dbConfig.PORT
});
//local
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PW,
//   database: process.env.MYSQL_DB
// });


// if (process.env.NODE_ENV === "production") {
//

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

app.use(express.static("build"));
app.get('/api/calculations', (req, res) => {
  pool.query(`SELECT * FROM ${ table } ORDER BY created_at DESC LIMIT 10`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});


app.post('/api/calculations', (req, res) => {
  console.log(req.body);
  let calc_obj = req.body;
  let queryText = `INSERT INTO calculations(number1, operator, number2, total, created_at)VALUES(${ calc_obj.number1 }, "${ calc_obj.operator }", ${ calc_obj.number2 }, ${ calc_obj.total }, "${ calc_obj.created_at }");`;

  pool.query(queryText, (error, result, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(result));
  });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App server listening to port ${ PORT }`);
});