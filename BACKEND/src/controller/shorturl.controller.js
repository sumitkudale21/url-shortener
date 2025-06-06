import { createshorturlwithoutuser } from "../services/shorturl.service.js";
import { getshorturl } from "../dao/shorturl.js";
import wrapAsync from "../utils/trycatchwrapper.js";

export const createshorturl = wrapAsync(async (req,res,next)=>{
  
  const {url} = req.body;
  const shortUrl = await createshorturlwithoutuser(url); 
  res.send(process.env.APP_URL + shortUrl)
  
})

export const redirectfronshorturl = wrapAsync(async (req, res) => {
  
  const {id} = req.params
  const url = await getshorturl(id)
  // console.log(url)
  res.redirect(url.full_url)
 
})