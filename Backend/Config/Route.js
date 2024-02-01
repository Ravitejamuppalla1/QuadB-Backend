const express = require('express')
const route = express.Router()
const userAuthenticate = require('../App/middlewares/authenticate')
const userCtlr = require('../App/controllers/users_controller')



route.post('/api/register',userCtlr.register)
route.post('/api/login',userCtlr.login)
route.get('/api/account',userAuthenticate,userCtlr.accountDetails)


module.exports = route