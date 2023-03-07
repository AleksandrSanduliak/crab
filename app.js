const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const {
  dbs
} = require('./public/firebase/fire')
const {
  resolve
} = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public', express.static(path.join(__dirname, 'public', )));
let products = []
async function dataProducts() {
  try {
    await dbs.collection('product').get().then(
      snapshot => {
        let docs = snapshot.docs
        for (let doc of docs) {
          // products = Object.assign({}, doc.data())
          products.push(doc.data())
        }
      })
    return products
  } catch (err) {
    console.log(err + ' error promise firebase products')
  }
}

dataProducts()

app.get('/', (req, res) => {
  res.render(path.join(__dirname + '/views/index.ejs'), {
    // params: assinging,
    prod: products,
    // rev: reviews,
  })
})
app.get('/data', (req, res) => {
  res.send(products)
})
app.listen(PORT, () => console.log(`server run on ${PORT}`))
module.exports = app