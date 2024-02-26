const express = require("express")

const { home, signUp, getUsers, deleteUser, editUser, login } = require("../controllers/user.js")


const router = express.Router();

router.get("/", home)
router.post("/login", login)
router.post('/signUp', signUp)
router.get('/getusers', getUsers)
router.put('/edituser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router