
const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send('Hello World ver 0.6!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
