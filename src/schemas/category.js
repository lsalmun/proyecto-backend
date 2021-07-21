const {Schema, Types, model} = require('mongoose')

let category = new Schema({

//_id : Types.ObjectId,

categoryId: {

    require: false,
    type: Types.ObjectId,
    ref :'category'
},
categoryName: {
    type : String,
    required : true,
    unique : true,
    
}
})

module.exports = model('category',category)