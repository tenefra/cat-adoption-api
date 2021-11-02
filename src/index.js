const express = require("express")
const bodyParser = require("body-parser")
const cats = require("./routers/cats")
const users = require("./routers/users")
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(users)
app.use(cats)

app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))
