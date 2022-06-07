import { Gif, PhotoLibrary, Videocam } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { color } from '@mui/material/node_modules/@mui/system'
import React from 'react'
import './Posts.css'


export const Posts = () => {

    const  handleSubmit = (event) =>{
       event.preventDefault();
    }

  return (
    <div  className='posts'>

   <div className="messageSender__top">
       <Avatar/>
       <form action="">
    <input  className='messageSender__top__input' type="text"  placeholder='What on your mind?'/>
   <button onClick={handleSubmit}  type='submit'>Posts</button>
       </form>
   </div>

   <div className="messageSender__bottom">
       <div className="messageSender__bottom__options">
            <Videocam style={{color:"red"}} />
            <h3>Live Video</h3>
       </div>
       <div className="messageSender__bottom__options">
            <PhotoLibrary style={{color:"green"}} />
            <h3>Photo/Videos</h3>
       </div>
       <div className="messageSender__bottom__options ">
            <Gif style={{background:"#2ABBA7" , color:"white"}} />
            <h3>GIF</h3>
       </div>
   </div>

    </div>
  )
}
