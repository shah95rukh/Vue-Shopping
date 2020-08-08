const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const UserModel = require('../mongo/model/user')

router.route('/login').post((req, res) => {
  UserModel.find({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }, function (err, user) {
    if (err) {
      res.send(err)
    }
    
    //You will have to modify this code to use bcrypt to compare 
    //the hashed version of the password in the databse 
    //with the plain text password passed to this route

    if (user.length === 0) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized credentials mismatch'
      })
    } else {
      res.json(user)
    }
  })
})
module.exports = router
