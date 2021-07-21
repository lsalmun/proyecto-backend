const {Schema, Types} = require('mongoose')

module.exports = new Schema({

//_id : Types.ObjectId,
userId :	{
    type: "ObjectId",
    ref: "User",
},
firstName :	{
    type : string,
    required : true,
}
lastName :	{
    type : string,
    required : true,
}
birthdate :	{
    typr : Date,
    required : true,
}



})