const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials : true
}));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server started running on port ${port}`);
});

app.get('/',(req,res)=>{
     res.send({
        message : "Welcome to Heliverse"
     })
})

const dbConnect = require('./Config/Database');
dbConnect();

const userRouters = require('./Routes/User');

app.use("/api/users",userRouters);