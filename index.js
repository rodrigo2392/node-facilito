const express = require('express')
const app = express()
const port = 3250
// const port = 3251

app.get('/', (req, res) => {
  res.send('Hola Codigo Facilito')
})

app.get('/hello', (req, res) => {
  res.send('Hola y bienvenido a mi API')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`)
})