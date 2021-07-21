const {Schema, Types} = require('mongoose')

module.exports = new Schema({

//_id : Types.ObjectId,
userId :	{
    type: Type.ObjectId,
    ref: "User",
},
country : {
    type : String,
    required : true,
},
    
street : {
    type : String,
    required : true,
},
height : String,
floor : String,
apartment : String,
city : String,
zipcode : String,
userId : user,

})