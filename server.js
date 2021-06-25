const express=require('express');
const app= express();
require('./connection');
app.use(express.json());

const ask_questionRouter = require("./routes/ask_questionRouter");
app.use("/user",ask_questionRouter);

app.listen(3000,() =>{
    console.log(" Server Listen Port");

});