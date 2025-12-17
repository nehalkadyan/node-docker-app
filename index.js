// import express

const express = require('express');

const app = express();

// api routes

app.get("/", (req, res) => {
   return res.send("<h1>Hello from Node Sharda</h1>") 
})

// listen
app.listen(5001, () => {
    console.log("Server is listening on port 5001")
})