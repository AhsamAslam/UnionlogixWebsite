const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5500;

app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/Contact.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({

        service: 'gmail',
        auth:{
            user: 'arqamawan4060@gmail.com',
            pass: 'arqamawan123'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'arqamawan4060@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            console.log('Email Sent: ' + info.response);
            res.send('success');
        }
    });
})

app.listen(PORT, ()=>{
    console.log('Server running on port ${PORT}')
})