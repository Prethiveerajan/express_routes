const express = require ('express')
const router = express.Router()

router.get('/',(request,response) =>{
    response.send("This is user page")
})

// dynamic express
router.get('/newUser',(request,response) =>{
    response.render("users/new")
})

router.post('/',(request,response) =>{
    const IsAValidUser = true
    if(IsAValidUser)
    {
        users.push({name:request.body.firstname})
        response.redirect(`user/${users.length-1}`)
    }
    else
    {
        console.log('Error')
        response.render('users/new',{firstname : request.body.firstname})
    }
    console.log(request.body.firstname)
    response.send("New User Created Successfully.")
})

router.get('/:id',(request,response) =>{
    response.send(`user id is ${request.params.id}`)
    console.log(request.user.Name)
}) 

const users=[
    { 
    
        Name:'one'
      } ,
      {
        Name:'two'
      } ,
      {
        Name:'three'
      },
      {
        Name:'four'
      },
      {
        Name:'five'
      },
      {
        Name:'six'
      },
      {
        Name:'seven'
      }


];






module.exports = router