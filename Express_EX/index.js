const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 3000;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_ocqmz",
  password: "F7DYYpIrNGB7BEfZ",
  database: "lab_todo01_o4utdg",
});

connection.connect();

console.log("Database is connected");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send({
    name: "Petchpailin Saringkareekul",
    nickName: "Mint",
    university: "KMUTT",
  });
});

app.get("/todo/all", (req, res) => {
  connection.query("SELECT * FROM items", (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      return res.json({
        success: true,
        data: rows,
        error: null,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});