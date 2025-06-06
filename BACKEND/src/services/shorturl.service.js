import { generatenanoid } from "../utils/helper.js";
import { saveshorturl } from "../dao/shorturl.js";

export const createshorturlwithoutuser = async (url) => {
  const shortUrl = await generatenanoid(7);
  if(!shortUrl) throw  new Error("short url not generated")
    
  await saveshorturl(shortUrl, url); // correct order
  return shortUrl;
};

export const createshorturlwithuser = async (url, userID) => {
  const shortUrl = await generatenanoid(7);
  await saveshorturl(shortUrl, url, userID); // correct order
  return shortUrl;
};
