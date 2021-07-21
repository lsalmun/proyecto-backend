const {Schema, Types} = require('mongoose')

module.exports = new Schema({

//_id : Types.ObjectId,
userId :	{
    type: "ObjectId",
    ref: "User",
},
body :	string,
dislikesCount :	{
    Number,
    default : 0,
},
creationDate :	Date,
likesCount :	{
    Number,
    default : 0,
},
ProductId : Product,

})