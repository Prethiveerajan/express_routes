const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{

    response.send("this is product page")
})
router.get('/:id/:name',(request,response)=>{
    response.send("passed value is:"+request.params.id+" & name is:"+request.params.name)
})
module.exports =router