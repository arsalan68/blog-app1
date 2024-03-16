import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Usercontext from '../context/Usercontext';


const Login = () => {

  const ctx = useContext(Usercontext)
  console.log(ctx)

  let emailRef = useRef()
  let passwordRef = useRef()
  let navigate = useNavigate()
  // let checkMeOutRef  = useRef()

  let handleLogin = async (e) => {
    e.preventDefault();
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      //  check:checkMeOutRef.current.value
    }
    console.log(obj)

    let res = await fetch('http://localhost:8080/user/login', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    let data = await res.json();
    console.log(data)
    if (data.success) {
      localStorage.setItem('userDetails',JSON.stringify(data))
      ctx.setauth({Login:true,user:data.userExists})
      navigate('/')
      toast.success(data.msg, { position: 'top-center' })
    } else {
      toast.error(data.msg, { position: 'top-center' })
    }
  }

  return (
    <div id='Login'>
      <form className='container w-50 m-auto py-5 mt-5'>
        <h1 className='text-center'>Login form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" ref={emailRef} placeholder='Enter your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" ref={passwordRef} placeholder='Enter your Password' className="form-control" id="exampleInputPassword1" />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" ref={checkMeOutRef} htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-danger" onClick={handleLogin}>Submit</button>

        <p className='text-center mt-2'>Don't have an account <Link to={'/sign'}>Sign</Link></p>
      </form>

    </div>
  )
}

export default Login
