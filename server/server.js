const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
// const fileUpload = require('express-fileupload');
// const userRoutes = require("./routes/userRoutes"); 

// const cloudinaryConnect=require("./config/cloudinary")
// cloudinaryConnect();
const formRoute =require("./routes/formRoutes");
const port=process.env.PORT || 4001
// Middlewares
app.use(express.json());
app.use(cors());
// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: '/tmp/'
// }));

// intigration of routes
// app.use("/api/v1/user", userRoutes);
app.use("/api/v1",formRoute)
app.listen(port,(req,res)=>{
    console.log(`server is running at port no ${port}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1> Say Hellow To Cosmic Coder 24..`)
})