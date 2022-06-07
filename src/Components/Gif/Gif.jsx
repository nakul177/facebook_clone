import React, { useState } from 'react'
import './Gif.css'

export const Gif = () => {


const [search , setSearch] = useState("")
const [gifs , setGifs] = useState([])
const [loading , setLoading] = useState(false)

const searchGif = () =>{
    setLoading(true)
   if(search.length > 0){
       fetch(`https://api.giphy.com/v1/gifs/search?api_key=0cdU9SIyPKdy54PvamUp7w0QOaC5eDO3&q=${search}&limit=25&offset=0&rating=g&lang=en`)
       .then((res) => {
        setLoading(false)
           return res.json();
       })
       .then((result) => {
setGifs(result.data.map((gif) => {
    return gif.images.fixed_height.url;
}))
       })
       .catch((err) => {
        setLoading(true)
           alert("Something went wrong")
       })
   }
}
  return (
      <div className='gif'>
 <div className='gif__header'> 
  <input type="text" placeholder='Search GIFs' value={search} onChange={(e) =>  setSearch(e.target.value)}/>
  <button >Search</button>
 </div>
    <div className='result'>
    <div className="loading">
        <div className="loader">

        </div>
    </div>
    <div className='list'>
        {gifs.map((gif) => 
         <div  className='gif'>
     <img  src={gif} alt="" />
         </div>
        )}
    </div>
    </div>
      </div>
   
  )
}
