const express = require('express');
const { isValidEmail, sendEmail } = require('./utils/email')

const app = express();
const STATIC_URL = `${__dirname}/client/build`;

app.use(express.static(STATIC_URL));

app.get('/service-worker.js', (req, res)=>{
    res.sendFile(`${STATIC_URL}/service-worker.js`)
});
if(process.env.NODE_ENV === 'production'){

    app.post('/api/contact', (req, res)=>{
        const { firstName, lastName, email } = req.body;
        if(isValidEmail(email)){
            
            res.status(200).send({
                status: 'Success',
                message: 'Your email has been sent'
            })
        }else{
            res.status(400).send({
                status: 'Fail',
                message: 'Your email is invalid'
            })
        }
    });

    app.get('*', (req, res)=>{
        res.sendFile(`${STATIC_URL}/index.html`)
    });
}else {

}



module.exports = { app };