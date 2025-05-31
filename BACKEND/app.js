import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import ShortUrl from "./src/models/shorturl.js";


dotenv.config("./.env")
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post("/api/create",(req,res)=>{
  const {url} = req.body;
  const shortUrl = nanoid(7);
  const newUrl = new ShortUrl({
  full_url: url,
  short_url: shortUrl, // fix this field name to match schema!
});

  newUrl.save()
  res.send(nanoid(7))  
})

app.listen(5000, ()=>{
  connectDB()
  console.log("server is running on http://localhost:5000");
})

//GET - Redirection
//Post - Create Short url