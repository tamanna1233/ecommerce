import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

const [isUserExist , setIsUserExit]= useState(false) ;

   useEffect(()=> {
    let user =localStorage.getItem("user");
    user ? setIsUserExit(true) : setIsUserExit(false);
   })


   const logoutHandle =()=>{
localStorage.clear();
navigate("/");


   }

  return (
    <>

          {   isUserExist  ?   
          <nav> 
            <NavLink to='/'>ProductPage</NavLink>
            <NavLink to='/addproduct'>Add product</NavLink>
            <NavLink to ='/signup' onClick={logoutHandle}>logout</NavLink>
          </nav>         
          :    
          <nav>
               
          <NavLink to='/Signup'>Signup</NavLink>
          <NavLink to='/Login'>Login</NavLink>

</nav>        }


      
    </>
  )
}

export default Navbar
