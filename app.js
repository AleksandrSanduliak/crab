const { Client } = require('pg')
const express = require('express')
const PORT = 5000
const app = express()


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
console.log(assinging)
app.get('/', (req, res) => {
  res.send(assinging)
})
app.listen(PORT, () => console.log('server run port `${PORT}`'))