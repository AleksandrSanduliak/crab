const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const {dbs} = require('./public/firebase/fire')
const {resolve} = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public', express.static(path.join(__dirname, 'public', )));
let products = []
let assinging = []
let reviews = []

async function data(array, collection) {
  try {
    await dbs.collection(collection).get().then(
      snapshot => {
        let docs = snapshot.docs
        for (let doc of docs) {
          array.push(doc.data())
        }
      })
    return array
  } catch (err) {
    console.log(err + ' error promise firebase' + collection)
  }
}

app.get('/', (req, res) => {
  Promise.all([
    data(products, 'product'),
    data(assinging, 'cityinfo'),
    data(reviews, 'reviews'),
  ]).then(([promise1, promise2, promise3]) => {
  console.log(promise1)
  console.log(promise2)
  console.log(promise3)
  }).then(()=>{
    res.render(path.join(__dirname + '/views/index.ejs'), {
      params: assinging,
      prod: products,
      rev: reviews,
    })
  })
})
// app.get('/data', (req, res) => {
//   res.send(reviews[0])
// })
app.listen(PORT, () => console.log(`server run on ${PORT}`))
module.exports = app