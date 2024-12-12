import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./Login.module.css";

const Login = () => {
  const[email,setemail] = useState();
  const[password,setpassword] = useState();
  const Login=async(e)=>{
    e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:3000/user/login`,{
        method:"POST",
        headers:{
          "content-Type":"<application/>json"
        },
        body:JSON.stringify({email,password}),
      } );
      const response=await sendSign.json();
      if(sendSign.ok){
        alert("login successful");
        localStorage.setItem("token",response.token)

      }else{
        alert("login failed");
      }

    } catch(error){

    }
  }
  return (
    <div className={style.full}>
      <div className={style.Login}>
        <h1 className={style.hello}>LOGIN</h1>
         <input type="email" name='email' className={style.email} placeholder='email' onChange={(e)=>setemail()}/><br />
         <input type="password" name='password' className={style.password}placeholder='password' onChange={(e)=>setpassword()} /><br />
         <button className={style.button} onClick={Login()}>Login</button><br />
       <div> <p>don't have an account?<Link to="/signup">signup</Link></p></div>
       </div>
      </div>
    
  );
};

export default Login;
