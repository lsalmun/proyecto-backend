


const router = require ('express').Router();
const phone = require ('../schemas/phone')

//http://localhost:4000/categories

router.get('/',function (req, res) {
//enviar listado de categorias
phone
.find()
.exec()
.then(function (phones){
    res.send (phones)
})
.catch(function (){
    res.send ({message : "error"})

    })
})


router.get('/:id',function (req, res) {
    //enviar el detalle  de la categorias con el id de la url
    phone
    .findById(req.params.id)
    .then(function (phones){
        res.send (phones)
    })
    .catch(function (){
        res.send ({message : "error"})
    
        })
    })

router.post('/', function (req, res){

    let Phone = new phone(req.body)

    Phone
    .save()
    .then (function (Phone) {
    res.send ({message : Phone._id})
    })
    .catch(function (){
        res.send ({message : "error"})
    
        })
})


router.delete('/:id', function (req,res){
//enviar mensaje de confirmacion
    phone.deleteOne ({_id: req.params.id})
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
phone
.findByIdAndUpdate(req.params.id, req.body)
.then (function(){
    res.send ({message:"updated"})

})
.catch(function (err){
    res.send ({mesage : 'error'})
    console.log(err)
})


})

router.get('/phones',function (req, res) {

   phone
    .find()
    .exec()
    .then(function (phone){

        res.send (phone)
    })


    .catch(function (){
    res.send ({message : "error"})

    })

//enviar listado de todas las categorias


})





module.exports = router