var express = require('express')
var app = express()
var cors = require('cors');

const quotes = [
  {
    quote: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock'
  },
  {
    quote: 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.',
    author: 'Helen Keller'
  },
  {
    quote: 'Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.',
    author: 'Henry Reed'
  }
]

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/quote', function (req, res, next) {
  const index = Math.floor(Math.random() * quotes.length);
  res.json({
    ...quotes[index]
  })
})

app.post('/login', function(req, res, next) {
  res.json({
    accessToken: new Date().getTime()
  })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})