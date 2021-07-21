

const router = require ('express').Router();
const Product = require ('../schemas/product.js')


router.get('/',function (req, res) {
   
let query = {}

if (req.query.brand) {

    query.brand = req.query.brand
}

if (req.query.price_min) {

    query ["$and"] = [

        {
            price : {
                "$gte" : req.query.price_min
            }
        }
    ]
}

let result = Product.find(query)

if (req.query.order) {
    result.sort({[req.query.order] : req.query.dir === 'asc' ? 1 : -1 })
}

if (req.query.start) {
    result.skip(Number(req.query.start))
}

result.limit (10)


result.then(result => {

    res.send(result)
}).catch(err => {
    console.log(err)
    res.send({message : "error"})
})


    })



// router.get('/:id',function (req, res) {
//     //enviar el detalle  de la categorias con el id de la url
//     Product
//     .findById(req.params.id)
//     .then(function (product){
//         product.views_acount = product.views_acount+1

//         product.save().then(product =>{
//             res.send (product)
//         })
        
//     })
//     .catch(function (){
//         res.send ({message : "error"})
    
//         })
//     })