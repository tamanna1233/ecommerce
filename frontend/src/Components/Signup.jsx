import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const [name ,setName]= useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

    const navigate =useNavigate();

    const signupHandle=async(e)=>{
      e.preventDefault();

      let result =await fetch("http://localhost:1234/signup",
        {
        method:"post",
        body:JSON.stringify({name,email,password}),
        headers:
        {"Content-Type": "application/json",}
      })
      let data =await result.json();
      if (result.status==400) {
        alert(data.message);
        
      }
      else{
        alert("signup success");
        localStorage.setItem("user" , JSON.stringify(data))
        navigate("/")
      }
    }
  return (
    <>
    <div className='box'>
      <h1>Signup</h1>
      <form onSubmit={signupHandle}>
             <label>Name:</label>
             <input 
             type="text"
             placeholder='Enter your name'
             name='name'
             onChange={(e)=> setName(e.target.value)} 
             />
             <br /><br />
             <label>Email:</label>
             <input 
             type="email" 
             placeholder='Enter your Email'
             name='email'
             onChange={(e)=> setEmail(e.target.value)}/>
             <br /><br />
             <label>password</label>
             <input 
             type="password"
             placeholder='Enter Password'
             name='password' 
             onChange={(e)=> setpassword (e.target.value)}/>
             <br /><br />
             <button>Signup</button>
      </form>
    </div> 
    </>
  )
}

export default Signup
