import { useState } from "react";
import Usercontext from "./Usercontext";



const Userstate = (props) =>{
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    const [auth,setauth] = useState({
        user:userDetails?userDetails.userExists:"",
        Login:userDetails?true:false 
    });





    return(
        <Usercontext.Provider value={{auth,setauth}}>
            {props.children}
        </Usercontext.Provider>
    )
}

export default Userstate