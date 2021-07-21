

const router = require ('express').Router();
const category = require ('../schemas/category.js')
const {body, validationResault} = require ('express-validator')



//name : requerido, minimo 3 caracteres max 50
// categoryId : debe existir en la base de datos
// let validatePost = [
// body('name').notEmpty(),
// body('name').islength({min : 3, max : 50}),

//    ]






//http://localhost:4000/categories

router.get('/',function (req, res) {
//enviar listado de categorias
category
.find()
.exec()
.then(function (categories){
    res.send (categories)
})
.catch(function (){
    res.send ({message : "error"})

    })
})


router.get('/:id',function (req, res) {
    //enviar el detalle  de la categorias con el id de la url
    category
    .findById(req.params.id)
    .then(function (categories){
        res.send (categories)
    })
    .catch(function (){
        res.send ({message : "error"})
    
        })
    })

router.post('/', function (req, res){

// let errors = validationResault(req)
// console.log(errors)

    let Category = new category(req.body)

    Category
    .save()
    .then (function (Category) {
    res.status(201).send ({message : Category._id})
    })
    .catch(function (err){
        console.log(err)
        res.status(422).send ({message : err})
    
        })
})


router.delete('/:id', function (req,res){
//enviar mensaje de confirmacion
    category.deleteOne ({_id: req.params.id})
    .then(function (){
        res.send ({mesage : 'deleted'})
    })

    .catch(function (){
        res.send ({mesage : 'error'})
        
    })
    
})


//http://localhost:4000/categories/123
router.patch ('/:id', function (req,res){
//enviar mensaje de confirmacion
category
.findByIdAndUpdate(req.params.id, req.body)
.then (function(){
    res.send ({message:"updated"})

})
.catch(function (err){
    res.send ({mesage : 'error'})
    console.log(err)
})


})

router.get('/categories',function (req, res) {

   category
    .find()
    .exec()
    .then(function (category){

        res.send (category)
    })


    .catch(function (){
    res.send ({message : "error"})

    })

//enviar listado de todas las categorias


})





module.exports = router