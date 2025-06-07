import axiosinstance from "../utils/axiosinstance";

export const creatShortUrl = async (url) => {
  const {data} = await axiosinstance.post("/api/create", {url})
  return data.shortUrl;
}