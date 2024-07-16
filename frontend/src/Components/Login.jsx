import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    const [email,setemail]=useState("")
     const[password,setpass]=useState("")

     const navigate =useNavigate();


     const loginhandle = async (e)=>{
        e.preventDefault();
        let result = await fetch("https://ecommerce-4sj6.onrender.com/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-type":"application/json"
            }
        })
        let data =await result.json();
        if (result.status==400) 
            {
            alert(data.message)
        } else{
            console.log(data)
            localStorage.setItem("user",JSON.stringify(data));
            alert("welcome....." + data.name)
            navigate("/")
        }

     }
    return (
    <>
      
<div className='box'>
<h1>  Login </h1>
    <form onSubmit={loginhandle}>
    <label htmlFor="">Email:</label>
             <input 
             type="email" 
             placeholder='Enter your Email'
             name='email'
             onChange={(e)=>setemail(e.target.value)}/>
             <br /><br />
             <label htmlFor="">Password</label>
             <input 
             type="password"
             placeholder='Enter Password'
             name='password' 
             onChange={(e)=>setpass(e.target.value)}/>
             <br /><br />
             <button>Login</button>
    </form>
</div>

    </>
  )
}

export default Login
