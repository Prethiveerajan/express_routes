const express = require('express')
const service = express.Router()

// service.get('/', (request, response) => {
//   response.send("servicePage")
// })

service.get('/:id', (request, response) => {
  const serviceId = Number(request.params.id)
  const getService = Listofservice.find((service) => service.id === serviceId)

  if (!getService) {
    response.status(500).send("Service not found")
  } else {
    response.json(getService)
  }
})                  

const Listofservice = [
  {
    "id": 1,
    "name": "Web Development"
  },
  {
    "id": 2,
    "name": "Software Service"
  },
  {
    "id": 3,
    "name": "Tech Service"
  }
]

module.exports = service



// const express = require('express')
// const service = express.Router()

// service.get('/', (request, response) => {
//   response.send("servicePage")
// })

// service.get('/:id', (request, response) => {
//   if (request.params.id == 1) {
//     response.send("Web Development")
//   } else if (request.params.id == 2) {
//     response.send("Mobile Development")
//   } else if (request.params.id == 3) {
//     response.send("Service Development")
//   } else {
//     response.send("Invalid ID")
//   }
// })

// module.exports = service
