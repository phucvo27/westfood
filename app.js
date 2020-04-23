const express = require('express');


const app = express();
const STATIC_URL = `${__dirname}/client/build`;

app.use(express.static(STATIC_URL));

app.get('/', (req, res)=>{
    res.sendFile(`${STATIC_URL}/index.html`)
})
app.get('/service-worker.js', (req, res)=>{
    res.sendFile(`${STATIC_URL}/service-worker.js`)
})

module.exports = { app };