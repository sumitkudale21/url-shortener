import { generatenanoid } from "../utils/helper.js";
export const createshorturlservice = (url) => {
  const shortUrl = generatenanoid(7);
  const newUrl = new ShortUrl({
  full_url: url,
  short_url: shortUrl, // fix this field name to match schema!
})
  newUrl.save()
  return shortUrl; 
}