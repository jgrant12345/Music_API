const express = require("express")

let port = process.env.PORT || 3000;

const app = express()

app.get("/",(req,res) => {
   res.send("hello world")
})

app.listen(port,() => {
   console.log(`Example app is running on port ${port} `)
})

