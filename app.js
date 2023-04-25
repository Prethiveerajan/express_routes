const express = require('express')
const app = express()
const secondPage = require('./aboutus.js')
const fourthPage = require('./product.js')
const thirdPage =require('./contactus.js')
const fifthPage =require('./login.js')
const sixthPage = require('./service.js')
app.get('/',(request,response) =>{
    
    response.send("Home Page")
    
})
app.use('/aboutus',secondPage)
app.use('/contactus',thirdPage)
app.use('/product',fourthPage)
app.use('/login',fifthPage)
app.use('/service',sixthPage)
app.listen(3500)