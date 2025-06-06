import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shorturl from "./src/routes/shorturl.rout.js";
import { redirectfronshorturl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";


dotenv.config("./.env")

const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create", shorturl);
app.get("/:id", redirectfronshorturl)

app.use(errorHandler)
app.listen(5000, ()=>{
  connectDB()
  console.log("server is running on http://localhost:5000");
})

//GET - Redirection
//Post - Create Short url