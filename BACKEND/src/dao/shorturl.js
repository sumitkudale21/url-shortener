import ShortUrl from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorhandler.js";

export const saveshorturl = async (shortCode, longUrl, userID) => {
  try{

      const newUrl = new ShortUrl({
        full_url: longUrl,
        short_url: shortCode, // make sure this matches your schema field
      });
      
      if (userID) {
        newUrl.user = userID;
      }
      
      await newUrl.save();
  }catch(err){
    if(err.code == 11000){
      throw new ConflictError("Short url already exists");
    }
    throw new Error(err);
  }
};

export const getshorturl = async (shortCode) => {
  return await ShortUrl.findOneAndUpdate({short_url:shortCode}, {$inc:{clicks:1}}) 
};