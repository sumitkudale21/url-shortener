import { getShortUrl, getCustomShortUrl } from "../dao/shorturl.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shorturl.service.js"
import wrapAsync from "../utils/trycatchwrapper.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug||null)
    }else{  
        shortUrl = await createShortUrlWithoutUser(data.url,data.slug||null)
    }
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})


export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getCustomShortUrl(id) || await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url,slug)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})