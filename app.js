const { Client } = require('pg')
const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000

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
app.get('/', (req, res) =>{
  res.render('index', { params: assinging })
})
app.listen(PORT, () => console.log('server run'))

module.exports = app;