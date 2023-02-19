const {Client} = require('pg')
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

const index = require('./api/index')
const {resolve} = require('path')
const {rejects} = require('assert')
// app.use(express.json({
//   extended: false
// }));
app.use('/index', index)

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

app.get('/', (req, res) => {
  res.render('index')

})
module.exports = app;
app.listen(PORT, () => console.log(`server run on ${PORT}`))