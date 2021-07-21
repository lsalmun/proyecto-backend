const mongoose = require('mongoose');
const functions = require('./functions')

mongoose.connect('mongodb://localhost:27017/itmaster_ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('estamos conectados')
});





functions.createUser()