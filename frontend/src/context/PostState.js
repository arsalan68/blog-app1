import React, { useContext, useEffect, useState } from 'react'
import PostContext from './Postcontext';

const PostState = (props) => {
    const [allpost, setallpost] = useState([]);
    const fetchAllpost = async ()=>{
        let res = await fetch('http://localhost:8080/post/getAllPost');
        let data = await res.json();
        console.log(data)
        setallpost(data.post)
    }
    useEffect(()=>{
        fetchAllpost();
    },[])
    // console.log(allpost);
   
  return (
    <PostContext.Provider value={{allpost,fetchAllpost}}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
