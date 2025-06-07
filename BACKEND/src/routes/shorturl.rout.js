import express from "express";
import { createShortUrl, createCustomShortUrl, redirectFromShortUrl } from "../controller/shorturl.controller.js";
const router = express.Router();

router.post("/", createShortUrl)
router.post("/custom", createCustomShortUrl)
router.get("/:id", redirectFromShortUrl)

export default router;


