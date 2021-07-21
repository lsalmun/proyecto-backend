const mongoose = require('mongoose');
const User = require ('../src/schemas/User')



module.exports = {
  createUser () {
  
  let newUser = new User({email : "ttttttt@jjj.com", password : "hhhhhhhh"})

newUser.save().then(user => {
    console.log('el id del usuario es '+ user._id)
})
.catch(err=> {console.log.error(err)})
}, 

//createCategory (){}



}