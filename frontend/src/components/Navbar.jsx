import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBlog } from "react-icons/fa6";
import Usercontext from '../context/Usercontext';

const Navbar = () => {
  let ctx = useContext(Usercontext);
  const navigate = useNavigate()

  const handleLogout = (e)=>{
    e.preventDefault()
    localStorage.removeItem('userDetails');
    ctx.setauth({
      Login:false,
      user:"",
    })
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#"><FaBlog /> Blog</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {ctx.auth.Login && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/' href="#">Home</Link>
              </li>}
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/sign' href="#">Sign</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/login' href="#">Login</Link>
              </li> */}
              {ctx.auth.Login && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/yourblog' href="#">Your Blog</Link>
              </li>}
              {ctx.auth.Login && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" onClick={handleLogout} href="#">Log out</Link>
              </li>}
            </ul>
           {ctx.auth.Login && <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>}
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
