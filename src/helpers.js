function responWithError (res,err){
    console.log (err)
    res.status(422).send({message : err})
       }

module.exports = {
        responWithError

       }