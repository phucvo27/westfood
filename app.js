const express = require('express');


const app = express();

app.use(express.static(`${__dirname}/client/build`))
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/client/build/index.html`)
})


module.exports = { app };