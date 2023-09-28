import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Comments = () => {
  const [comments,setComments] = useState([])
  useEffect(() => {
    const getComments = async() => {
      let { data } = await axios("https://my-json-server.typicode.com/VeronikaKan/server/comments")
     setComments(data);
    }
    getComments()
  },[])

  return (
    
   <>

   <div className='comments'>
<div className='container'>
<div className='comments__wrapper'>
  {comments.map((el) => (
<div className='comments__card'>
<p className='comments__title'>
{el.email}
</p>
<p className='comments__date'>
{el.date}
</p>
<p className='comments__body'> 
{el.body}
</p>
</div>))}
</div>
</div>
   </div>
   </>
  )
}

export default Comments