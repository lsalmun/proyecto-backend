const {Schema, Types, model} = require('mongoose')

let phone = new Schema({

//_id : Types.ObjectId,
userId :	{
    type: "ObjectId",
    ref: "User",
},

countryCode :	{
    type : String,
    required : true,
},
areaCode :	{
    type : String,
    required : true,
},
number :	{
    type : String,
    required : true,
},

})

module.exports = model('phone',phone)