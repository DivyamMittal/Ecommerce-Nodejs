const express = require('express');
require("./db/config");
const app = express();

const userRouter = require("./routes/auth");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use('/api',userRouter);

app.listen(5001, ()=> {
    console.log("listenting to port");
})