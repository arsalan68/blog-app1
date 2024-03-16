import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Login from './pages/Login';
// ye hame npm toastify se milega aur instal bhi krna h 
import { ToastContainer } from 'react-toastify';
import YourBlogs from './pages/YourBlogs';
import { useContext } from 'react';
import Usercontext from './context/Usercontext';

function App() {
  let ctx = useContext(Usercontext)
  console.log(ctx)
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ToastContainer/>
        <Routes>
          {ctx.auth.Login && <Route  path='/' element = {<Home/>}/>}
          {!ctx.auth.Login && <Route  path='/' element = {<Navigate to={'/login'}/>}/>}
        { !ctx.auth.Login && <Route  path='/login' element = {<Login/>}/>}
        { ctx.auth.Login && <Route  path='/login' element = {<Navigate to={'/'}/>}/>}
          <Route  path='/sign' element = {<Sign/>}/>
          { ctx.auth.Login &&<Route  path='/yourblog' element = {<YourBlogs/>}/>}
          {!ctx.auth.Login &&<Route  path='/yourblog' element = {<Navigate to={'/login'}/>}/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
