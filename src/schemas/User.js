
const {Schema, model,} = require('mongoose') //Schema es estructura de datos, el modelo es
const md5 = require('md5')

let User = new Schema({

//_id : Types.ObjectId,

email : {
    type : String,
    required : true,
    unique : true,
},

password : {
    type : String,
    required : true,
},

registrationDate : {
    type : Date,
    default : Date.now
},

confirmationDate : Date,

ConfirmationToken : {
    
    type : String,
    required : true,

    default : function () {

        return md5(Date.now())
        
    }
    
},







})

User.statics.findByToken = function (Token) {
    return this.findOne({ConfirmationToken : Token})
    
}


User.methods.findByEmail = function (cb) {
   
    return model('User').find({email:this.email}, cb)
}

module.exports = model('User',User)