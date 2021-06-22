const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const md5 = require('md5')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function (req, res) {

    res.send('bien venido backend')
})

app.get('/register', function (req, res) {

    let file = path.resolve('src', 'views', 'register.html')

    res.sendFile(file)
    console.log(file)

})

app.get('/confirm', function (req, res){
    res.send('Confirmado!')
})

app.post('/register', async function (req, res) {

let token = md5(req.body.email + Date.now())
console.log(token)

    let testAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
console.log(testAccount)

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "bienvenido a nustro sistema", // plain text body
    html: `
    <a href="http://localhost:4000/confirm?token=${token}">
    confirma cuenta
    </a> 
    <p>hola</p>
    `
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

res.send(req.body)
})

app.listen(4000)

