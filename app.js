var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('<h1>hellow world<h1>')
  })
  

app.listen(2322,()=>{
    console.log("http://localhost:2322");
})