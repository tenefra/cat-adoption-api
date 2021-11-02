const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config({ path: "../../.env" })

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...")
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance
