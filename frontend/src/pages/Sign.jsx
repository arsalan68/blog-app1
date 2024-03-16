import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sign = () => {

  let nameRef  = useRef()
  let emailRef  = useRef()
  let passwordRef  = useRef()
  let addressRef  = useRef()
  // let checkMeOutRef  = useRef()

  let handleSign = async (e) => {
    e.preventDefault()
    let obj ={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      address:addressRef.current.value
      // check:checkMeOutRef.current.value
    }
    console.log(obj)

    let res = await fetch('http://localhost:8080/user/create',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
    let data = await res.json();
    console.log(data)
    if(data.success){
      toast.success(data.msg,{position:'top-center'})
    }else{
      toast.error(data.msg,{position:'top-center'})
    }

  }


  return (
    <div>
      <form className='container w-50 m-auto py-4 mt-1'>
      <h1 className='text-center'>Sign up form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input type="name" ref={nameRef} placeholder='Enter your Name' className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" ref={emailRef} placeholder='Enter your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" ref={passwordRef} placeholder='Enter your Password' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
          <input type="Address" ref={addressRef} placeholder='Enter your Address' className="form-control" id="exampleInputAddress" />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" ref={checkMeOutRef} htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-danger" onClick={handleSign}>Submit</button>

        <p className='text-center mt-2'>Already have an account <Link to={'/login'}>Login</Link></p>
      </form>
                  
    </div>
  )
}

export default Sign
