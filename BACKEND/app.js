import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shorturl from "./src/routes/shorturl.rout.js";
import auth_routes from "./src/routes/auth.routes.js";
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";


dotenv.config("./.env")

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(attachUser)
app.use("/api/auth", auth_routes);
app.use("/api/create", shorturl);
app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)
app.listen(5000, ()=>{
  connectDB()
  console.log("server is running on http://localhost:5000");
})

//GET - Redirection
//Post - Create Short url