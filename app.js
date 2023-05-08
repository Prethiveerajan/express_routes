const express = require('express')
const app = express()
// const secondPage = require('./aboutus.js')
// const fourthPage = require('./product.js')
// const thirdPage =require('./contactus.js')
// const fifthPage =require('./login.js')
const sixthPage = require('./user.js')
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.urlencoded({extend:true}))
app.get('/',(request,response) =>{
    
    response.send("Home Page")
    response.render("index")
    
})
// app.use('/aboutus',secondPage)
// app.use('/contactus',thirdPage)
// app.use('/product',fourthPage)
// app.use('/login',fifthPage)
app.use('/user',sixthPage)
app.listen(3500)
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// app.post('/api/submit', (req, res) => {
//   const formData = req.body;
//   console.log(formData); // You can do something with the form data here

//   // Add your logic here to process the form data

//   res.status(200).send('Form submitted successfully!');
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
