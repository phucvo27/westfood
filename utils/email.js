const validator = require('validator');


function isValidEmail(email) {
    return validator.isEmail(email);
}

function sendEmail(to, template){
    console.log('Start sending...')
    // prepare payload's data
    const data = {
        from: "Westfoods <postmaster@sandbox887c0cbcc07840d6a1070318ae46b2a7.mailgun.org>",
        to,
        subject: "Welcome to Westfoods",
        html: template
    }
    // convert payload to querystring
    const payload = queryString.stringify(data);

    // config request's detail

    const requestDetail = {
        protocol: 'https:',
        hostname: 'api.mailgun.net',
        method: 'POST',
        path: '/v3/sandbox887c0cbcc07840d6a1070318ae46b2a7.mailgun.org/messages',
        auth: 'api:API-KEY',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(payload)
        }
    };
    // Instantiate the request object
    const req = https.request(requestDetail, function(res){
        const statusCode = res.statusCode;
        if(statusCode === 200 || statusCode === 201){
            console.log('Email is sent...')
        }else{
            console.log('Something went wrong...');
            console.log(res.message)
        }
    });

    // Handle error;
    req.on('error', (err)=>{
        console.log('We have an error: ', err.message);
    });

    // Add payload to request for sending
    req.write(payload)

    // Send request
    req.end();
}

module.exports = { isValidEmail, sendEmail }