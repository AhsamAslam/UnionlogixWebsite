const express = require('express');
//const bodyParser = require("body-parser");
//const router = express.Router();
const app = express();
// add router in express app
//app.use("/",router);
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const nodemailer = require('nodemailer');

 const PORT = process.env.PORT || 5500


app.get('/', (req, res)=>{
    debugger;
    res.sendFile(__dirname+ '/server.js')
})

app.post('/', (req, res)=>{
    debugger;
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
    console.log('Server running on port '+ PORT)
})