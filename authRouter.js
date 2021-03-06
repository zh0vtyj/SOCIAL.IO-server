const Router = require('express')
const router = new Router()

const controller = require('./authController')

const {check} = require('express-validator')

const authMiddleware = require('./middleWare/authMiddleware')
const roleMiddleware = require('./middleWare/roleMiddleware')

router.post('/registration', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "Password must be longer that 4 characters").isLength({min: 4})
], controller.registration)
router.post('/login', controller.login)
router.post('/newPost', controller.addNewPost)
router.get('/userPosts', controller.getUserPosts)
router.get('/posts', controller.getAllPosts)
// router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router