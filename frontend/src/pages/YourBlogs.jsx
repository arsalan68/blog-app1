import React, { useContext, useEffect, useState } from 'react'
import Usercontext from '../context/Usercontext'
import Sidebar from '../components/Sidebar'

const YourBlogs = () => {
  const ctx = useContext(Usercontext)
  console.log(ctx)
  let id = ctx.auth.user._id
  console.log(id)
  const [userposts, setuserposts] = useState([]);

  const fetchUserpost = async ()=>{
      let res = await fetch(`http://localhost:8080/post/getUserAllPost/${id}`);
      let data = await res.json();
      console.log(data.post)
      setuserposts(data.post)
  }
  useEffect(()=>{
      fetchUserpost();
  },[])
  return (
    <div className='container=fluid'>
    <div className='row'>
    <div className='col-3'>
       <Sidebar/>
    </div>
    <div className='col-9'>
     {userposts.map((ele)=>{
      return(
        <div className='card mb-3' key={ele._id}>
        <div className='row g-0'>
          <div className='col-md-4'>
           <img style={{height:'300px',width:'287px'}} src={ele.image} className="img-fluid rounded-start"  alt="" />
          </div>
          <div className='col-md-8'>
          <div className='card-body'>
          <h5 className='card-title'>{ele.title}</h5>
          <p className='card-text'>{ele.desc}</p>

          </div>

          </div>
        </div>

        </div>
      )
     })}
    </div>

    </div>
      
    </div>
  )
}

export default YourBlogs
