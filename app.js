const {Client} = require('pg')
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

const index = require('./api/index')
const {resolve} = require('path')
const {rejects} = require('assert')
// app.use(express.json());
// app.use('/index', index)

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use('/')

let assinging = {}
let product = {}
let reviews = {}

app.use('/', (req, res) => {
  res.render('index')

})
module.exports = app;
app.listen(PORT, () => console.log(`server run on ${PORT}`))