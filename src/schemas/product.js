const {Schema, Types, model} = require('mongoose')


let newProduct = new Schema({

//_id : Types.ObjectId,
// userId :	{
//     type: "ObjectId",
//     ref: "User",
// },
name : {
    type : String, 
    required : true,
},
    
price :	{
    type : Number,
    required : true,
},

brands :{
    type : Number, 
    required : true,

},
// aggregateRating :	Number,
// stock :	Number,
// category : String,

views_acount : {
    type : Number,
    default: 10,
},
})

module.exports = model("Product",newProduct)