const express = require("express");

// import the middleware
const apilogger = require('./middleware/apiLogger');

const app = express();

// custom middleware
app.use(apilogger);

// Built-in middleware to parse JSON
// app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'message':'User management service',
        'status':'UP'
    });
});

app.listen(3000,()=>{
    console.log("Server is running at port 8000");
});