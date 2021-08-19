const express = require('express')
var mysql = require('mysql');
const app = express()

require("dotenv").config()

const host = process.env.HOST
const user = process.env.MYUSER
const password = process.env.PASSWORD
const database = process.env.DATABASE

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});

db.connect(function(err) {
    if (err) throw err;
    console.log("MySql Connected...")
    })

    
app.get('/', (req,res) => {
    const sql = "SELECT * FROM Songs";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    })
})

app.listen('3000', () => {
    console.log("Server started on port 3000")
})