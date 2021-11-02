const pool = require("../sql/connection")
const bcrypt = require("bcrypt")

app.use(express.urlencorded({ external: false }))

const findAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err })
      return res.status(500).send("An unexpected error occurred")
    }
    res.json(rows)
  })
}

const findOneUser = (req, res) => {
  const {username, password} = req.body
  if (username && password) {
    let sql = 'SELECT * FROM users WHERE username = ?? AND password = ??'
    const replacements = [username, password]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if(err) {
        console.log({message: "Error occurred: " + err})
        return res.status(500).send("An unexpected error occurred")
      }
      res.json(rows)
    })
  } 
}

const createUser = (req, res) => {
  const {email, username, password}

  let sql = "INSERT INTO users (username, email, password) VALUES (??, ??, ??)"
  const replacements = [username, email, password]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId })
  })

}

module.exports = {
  findAllUsers,
  findOneUser,
  createUser
}
