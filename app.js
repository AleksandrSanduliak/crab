const { Client } = require('pg')
const express = require('express')
const path = require('path')
const PORT = 5000
const app = express()
app.set('view engine', 'ejs')
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crabsystem',
  password: 'root',
  port: 5432,
})
const datas = {}
let assinging = {}
db.connect(err =>{
  if(err) throw err +'err message'
  else console.log('db connected')
})
db.query('SELECT * from cityinfo', (err, data) =>{
  if(err) throw err + 'error query'
  // console.log(data, err)
  assinging = Object.assign(datas, data.rows)
  db.end()
})
// app.use('public/js', express.static(__dirname + '/js'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/images', express.static(__dirname + '/images'));
app.use('/assets', express.static('assets'))
app.get('/', (req, res) =>{
  // res.render('pages/index')
  res.render('index')
})
app.listen(PORT, () => console.log('server run port `${PORT}`'))
