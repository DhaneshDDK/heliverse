const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL
    ).then(()=>{
        console.log("Connected to database successfully");
    }).catch((error)=>{
        console.log("Error connecting to database", error.message);
    })
}

module.exports = dbConnect;