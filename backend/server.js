
const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();

const cors=require("cors");
const routes=require("./routes/todoRoutes")
const app=express();

 const PORT=process.env.PORT || 5000;
  

 //middle ware
 app.use(express.json());
 app.use(cors());
  mongoose
  .connect(process.env.MONGO_URI)
  .then(()=> console.log("database is connecte.."))
  .catch((err)=> console.log("err"))
  app.use("/api",routes)
 app.listen(PORT,() => console.log(`listening at ${PORT}...`));
