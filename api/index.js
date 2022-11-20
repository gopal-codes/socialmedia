require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const http = require("http");


mongoose.connect(process.env.CLOUD_MONGO_URL,
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(err){console.log(err)}
        console.log("connected to MongoDB");
    });

    // middleware
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/users", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/posts", postRoute);
    app.use("/api/conversations", conversationRoute);
    app.use("/api/messages", messageRoute)
    var server = http.createServer(app)

server.listen(8800,()=>{
    console.log("backend running successfully");
});

// initilization socket.io 
const io = require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});

// sending io to socketfile using props
require("./socketfile")(io);