require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
PORT = 3000

const app = require("./src/app.js");
mongoose.set('strictQuery', true);

//middleware
app.use(express.json());
app.use( (req,res,next) => {
    console.log(req.path, req.method);
    next();
} );

//connect to db
mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & listening on port", process.env.PORT);
        });
    })
    .catch( (error) => {
        console.log(error);
    });