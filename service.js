const express = require('express')
const router = express.Router()
router.get('/:id', (request, response) => {
  if (request.params.id == 1) {
    response.send("Web Development")
  } else if (request.params.id == 2) {
    response.send("Mobile Development")
  } else if (request.params.id == 3) {
    response.send("Service Development")
  } else {
    response.send("Invalid ID")
  }
})

// router.route('/:id')
// .get((request,response)=>{
//     console.log(request.user.name)
//     response.send('Get method user page with id '+request.params.id)
    
// })
// .put((request,response)=>{
//     response.send('Put method user page with id '+request.params.id)
    
// })
// .delete((request,response)=>{
//     response.send('delete method user page with id '+request.params.id)
// })



// const user =[
//     {
//         "name": "Web Development"
//       },
//         {
//         "name": "Software Service"
//       },
//       {
//         "name": "Tech Service"
//       },
//       {
//         "name":"mobileapplication"
//       },
//       {
//         "name":"sqldeveloper"
//       }
// ]
// router.param('id',(request,response,next,id)=>{
//     request.user = user[id]
//      next()

//     console.log(request.params.id);

// })

module.exports =router





