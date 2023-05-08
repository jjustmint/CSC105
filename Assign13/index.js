const express = require("express");
const app = express();
const port = 6000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_ocqmz",
  password: "F7DYYpIrNGB7BEfZ",
  database: "lab_todo02_o5cuzh",
});

connection.connect(() => {
  console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/register",async (req, res) => {
  // The JSON body
  const username = req.body.username
  const password = req.body.password
  
  
  if(!validatePassword(password)){
    return res.json({
          success: false,
          data: null,
          message: "Wrong password"
        });
  }

  const hash = await bcrypt.hash(password, 10);


  connection.query(
    `INSERT INTO users (username, password, hashed_password) VALUES (?,?,?)`,
    [username, password, hash],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "create success",
            },
          });
        }
      }
    }
  );
});

function validatePassword(password) {
    const lengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return lengthValid && hasUpperCase && hasLowerCase && hasNumber;
}

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        numRows = rows.length;
        if (numRows == 0) {
          res.json({
            success: false,
            message: "this username does not exist",
          });
        }
        const isMatch = await bcrypt.compare(password, rows[0].hash_password);
        if (!isMatch) {
          res.json({
            success: false,
            message: "the password is incorrect",
          });
        } else {
          res.json({
            success: true,
            message: "the password is correct",
            user: rows[0],
          });
        }
      }
    }
  );
});