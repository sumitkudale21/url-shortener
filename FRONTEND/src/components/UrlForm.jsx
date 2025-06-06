import axios from 'axios'
import e from 'cors'
import React, { useState } from 'react'

const UrlForm = () => {

  const [url, seturl] = useState("https://www.google.com")
  const [shorturl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false)
  

  const handleSubmit = async() => {
    const {data} = await axios.post("http://localhost:5000/api/create", {url})
    setShortUrl(data)
  }

  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  const handleCopy = () => {
    navigator.clipboard.writeText(shorturl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  
  return (
    <div className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onInput={(e) => seturl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          > 
            Shorten URL
          </button>
          {/* {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}
        
        {shorturl && (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shorturl}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleCopy}
                className={`ml-2 p-2 rounded-md transition-colors duration-300 ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
        </div>
  )
}

export default UrlForm