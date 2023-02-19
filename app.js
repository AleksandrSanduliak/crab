const {Client} = require('pg')
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

const index = require('./api/index')
const {resolve} = require('path')
const {rejects} = require('assert')

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crabsystem',
  password: 'root',
  port: 5432,
})

let assinging = {}
let product = {}
let reviews = {}
db.connect(err => {
  if (err) throw err + 'err message'
  else console.log('db connected')
})

const query1 = new Promise((resolve, reject) => {
    db.query('SELECT * from cityinfo', (err, data1) => {
      resolve(data1)
    })
  })
  .then(data1 => {
    assinging = Object.assign({}, data1.rows)
  })
  .catch(err => console.log(err + 'query1 err'))

const query2 = new Promise((resolve, reject) => {
    db.query('SELECT * from product', (err, data2) => {
      resolve(data2)
      
    })
  })
  .then(data2 => {
    product = Object.assign({}, data2.rows)
  })
  .catch(err => console.log(err + 'query2 err'))
const query3 = new Promise((resolve, reject) => {
    db.query('SELECT * from reviews', (err, data3) => {
      resolve(data3)
    })
  }).then(data3 => {
    reviews = Object.assign({}, data3.rows)
  })
  .catch(err => console.log(err + 'query3 err'))

app.get('/', (req, res) => {
  res.render(path.join(__dirname + '/views/index.ejs')
  ,
   {
    params: assinging,
    prod: product,
    rev: reviews,
  })
})
module.exports = app;
app.listen(PORT, () => console.log(`server run on ${PORT}`))