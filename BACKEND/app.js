import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js"

dotenv.config("./.env")
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post("/api/create",(req,res)=>{
  const {url} = req.body;
  console.log(url);
  res.send(nanoid(7))
})

app.listen(5000, ()=>{
  connectDB()
  console.log("server is running on http://localhost:5000");
})

//GET - Redirection
//Post - Create Short url