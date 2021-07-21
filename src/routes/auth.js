const router = require ('express').Router();
const path = require('path');
const User = require ('../schemas/User');
const nodemailer = require('nodemailer');


router.get('/register', function (req, res) {

    let file = path.resolve('src', 'views', 'register.html')

    res.sendFile(file)
    console.log(file)

})

router.get('/confirm', function (req, res){
    User.findByToken(req.query.token)
    .then (function (result){
      if (result) {
        return res.send('confirmado')
      }
      return res.send('no se encontro el usuario')
    })
    .catch(function (err){
     console.log(err.message)
     return res.send('Error!')


    })


})

router.post('/register', async function (req, res) {
  let user = new  User(req.body)

  user.save().then(async u => {

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
        <a href="http://localhost:4000/confirm?token=${u.ConfirmationToken}">
        confirma cuenta
        </a> 
        <p>hola</p>
        `
      });
    
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    

    console.log(u)

    res.send(nodemailer.getTestMessageUrl(info))

  }).cath(err => {console.log(err)
    return res.send ('Error!')
  })

let token = md5(req.body.email + Date.now())
console.log(token)

    

})

module.exports = router