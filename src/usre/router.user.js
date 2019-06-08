// user router
const {getUserController} = require('./controller.user')
const express = require('express')

// create router
const userRouter = express.Router()

// get /api/user
userRouter.route('/api/user')
    .get(getUserController)

module.exports = {
    userRouter
}
