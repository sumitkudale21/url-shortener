import { createshorturlservice } from "../services/shorturl.service.js";
import { generatenanoid } from "../utils/helper.js";

export const createshorturl = async (req,res)=>{
  const {url} = req.body;
  const shortUrl = await createshorturlservice(url); 
  res.send(process.env.APP_URL + shortUrl)
}