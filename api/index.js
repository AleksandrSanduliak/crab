const app = require('express')();
// const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

app.get('/', (req, res) =>{
    res.render('HELLO')
  })

module.exports = app;