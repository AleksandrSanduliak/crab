const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

const {resolve} = require('path')
const {rejects} = require('assert')

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render(path.join(__dirname + '/views/index.ejs'))
})
app.listen(PORT, () => console.log(`server run on ${PORT}`))