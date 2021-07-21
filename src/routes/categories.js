

const router = require ('express').Router();
const category = require ('../schemas/category.js')
const {body, validationResault} = require ('express-validator')
const {responWithError} = require ('../helpers.js')


//name : requerido, minimo 3 caracteres max 50
// categoryId : debe existir en la base de datos
let validatePost = [
body('name').notEmpty(),
body('name').isLength({min : 3, max : 50})

   ]


  




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



router.post('/',validatePost, function (req, res){

let errors = validationResault(req)

if (errors.isEmpty()) {

    let Category = new category(req.body)

    Category
    .save()
    .then (function (Category) {
    res.status(201).send ({message : Category._id})
    })

} else {
    responWithError(res,errors.mapped())

  
}
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
.catch(err=> responWithError(res,err))


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