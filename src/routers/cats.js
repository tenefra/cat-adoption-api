const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const cats = require("../data")
const CatsController = require("../controllers/cats")
const app = express()

router.use(express.json())

// Read- List
router.get("/cats", CatsController.findAllCats)

// Read - Show
router.get("/cats/:id", CatsController.findOneCat)

// Create

router.post("/cats", CatsController.createCat)

// Update

// Delete

module.exports = router
