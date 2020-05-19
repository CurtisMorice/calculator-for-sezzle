const app = require('express')();
const mysql = require('mysql');
const express = require('express');
const table = 'calculations';
const path = require('path');
const bodyParser = require('body-parser');
const dbConfig = require('../db/db-config'); // us for production
require('dotenv').config();

const PORT = process.env.PORT || 'https://calculator-sezzle.herokuapp.com';
const http = require('http').Server(app);
const io = require('socket.io')(http, { transports: ['polling', 'websocket'] });

http.listen(PORT, () => {
  console.log('listening on port ')
})

var cors = require('cors');
app.use(cors())

// socket connection
io.on("connection", (socket) => {
  console.log("IO connected");
  socket.on("calc-passed", (data) => {
    console.log("calc-passed", data);
    io.emit('calculation-sent', data);
  });
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
//local
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PW,
//   database: process.env.MYSQL_DB
// });

// Static Build
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('build'));

  // Express serve up index.html file if it doesn't recognize route

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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
