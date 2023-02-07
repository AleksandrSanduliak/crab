const { Client } = require('pg')
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

const index = require('./api/index')
const { resolve } = require('path')
const { rejects } = require('assert')
app.use(express.json({ extended: false }));
app.use('/api/index', index)

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crabsystem',
  password: 'root',
  port: 5432,
})
const datas = {}
let assinging = {}
let product = {}
db.connect(err =>{
  if(err) throw err +'err message'
  else console.log('db connected')
})
// db.query('SELECT * from cityinfo', (err, data) =>{
//   // console.log(data)
//   assinging = Object.assign(datas, data.rows)
//   db.query('SELECT * from product', (err, data2) =>{
//     product = Object.assign(datas, data.rows)
//     console.log(data2)
//   })
// })
const query1 = new Promise((resolve, reject) => {
  db.query('SELECT * from cityinfo', (err, data1) =>{
    assinging = Object.assign(datas, data1.rows)
    // console.log(data1)
    resolve()
  })
})
const query2 = new Promise((resolve, reject) => {
  db.query('SELECT * from product', (err, data2) =>{
    product = Object.assign(datas, data2.rows)
    // console.log(data2)
    resolve()
  })
})


app.get('/', (req, res) =>{
  res.render('index', { params: assinging, products: product })
})
app.listen(PORT, () => console.log(`server run on ${PORT}`))

