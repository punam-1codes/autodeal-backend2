const route = require('express').Router()


// imports controller
const contact = require('./contactForm.controller')

// get clients 
route.get('/all-contact-request', async (req,res,next) => {
    contact.getAllContactRequest(req,res,next) 
})
route.post('/all-deleted-contact', async (req,res,next) => {
    contact.getAllDeletedContactRequest(req,res,next) 
})
// add client routes
route.post('/add-contact',(req,res,next) => {
    contact.addContactRequest(req,res,next)
   
})


route.post('/delete-contact/:id',(req,res,next) => {
    contact.deleteContactRequest(req,res,next)
   
})



module.exports = route