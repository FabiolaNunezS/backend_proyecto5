const express=require('express')

const router= express.Router()

const{ signup, getUsers, updateUser, deleteUser, login, getUserById}=require('../controllers/User.controller')
const auth = require('../middlewares/auth')

router.get('/', getUsers)

router.post('/',signup)

router.put('/',updateUser)

router.delete('/',deleteUser)

router.post('/login',login)

router.get('/:_id',auth,getUserById)

module.exports=router;