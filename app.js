

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const mysql = require("mysql2")

const port = 3000



var dbConection = mysql.createConnection({

  host: "127.0.0.1",

  user: "root",

  password: "MyRootPassword@2022",

  database: "autos",

  multipleStatements: true



})


dbConection.connect((err) => {
  if (!err) {
    console.log('conectado exitosamente a la base de datos');
  } else {
    console.log(JSON.stringify(err, undefined, 2));
  }

})




app.use(bodyParser.json())
app.get('/', (req, res) => { res.send('It´s working!') })


app.get('/autos/:autoId', (req, res) => {

  res.send(req.params.autoId)

})


app.get('/autos', (req, res) => {
  dbConection.query("select * from autos", (errores, rows) => {
    if (!errores) {
      res.status(200).send(rows)
    } else {
      res.status(400).send(errores)
    }
  })
})



app.post('/autos/:autoId', (req, res) => {

  var response = {

    urlParam: req.params.autoId,

    marca: req.body.auto.marca

  }






  res.send(response)

})





app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})