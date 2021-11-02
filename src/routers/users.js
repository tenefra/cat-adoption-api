const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const users = require("../data")
const UsersController = require("../controllers/users")
const app = express()

router.use(express.json())

router.get("/", (req, res) => {
  res.json({ title: "One flew over the cuckoo's nest" })
})

// Read- List
router.get("/users", UsersController.findAllUsers)

// Read - Show
router.get("/users/:id", UsersController.findOneUser)

// Create

router.post("/users", UsersController.createUser)

// Update

// Delete

module.exports = router
