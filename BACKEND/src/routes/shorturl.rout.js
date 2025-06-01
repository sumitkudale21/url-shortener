import express from "express";
import { createshorturl } from "../controller/shorturl.controller.js";
// import ShortUrl from "../models/shorturl.model";
const router = express.Router();

router.post("/", createshorturl)

export default router;


