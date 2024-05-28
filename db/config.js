const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ecommerce").then(()=>{
    console.log("Connection successfull");
}).catch((err) =>{
    console.log("Error :- ",err);
});