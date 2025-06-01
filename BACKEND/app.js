import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import ShortUrl from "./src/models/shorturl.model.js";
import shorturl from "./src/routes/shorturl.rout.route.js";


dotenv.config("./.env")
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post("/api/create", shorturl);


app.get("/:id", async(req, res)=>{
  const {id} = req.params
  const url = await ShortUrl.findOne({short_url:id})
  if(url){
    res.redirect(url.full_url)
  }else{
    res.status(404).send("Not Found")
  }
})

app.listen(5000, ()=>{
  connectDB()
  console.log("server is running on http://localhost:5000");
})

//GET - Redirection
//Post - Create Short url