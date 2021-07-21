const {Schema, Types} = require('mongoose')

module.exports = new Schema({

//_id : Types.ObjectId,
userId :	{
    type: "ObjectId",
    ref: "User",
},
productId : {
    type : "ProductsId",
    ref : "products"
    
url : string,

})