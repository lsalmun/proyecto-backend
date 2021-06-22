const {Schema, Types} = require('mongoose')

moduel.exports = new Schema({

_id : Types.Objetid,

email : {
    Type : String,
    require : true
},

password : {
    Type : String,
    require : true
},

registracionDate : {
    Type : Date,
    default : Date.now
},

confirmationDate : Date,

ConfirmationToken : {
    
    type : String,
    required : true
},
    defautl : function () {

        return '...'
    }
    





})