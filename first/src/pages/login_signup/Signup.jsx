import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import style from "./Signup.module.css";
const Signup = () => {
  const[username,setusername]= useState();
  const[email,setemail] = useState();
  const[password,setpassword] = useState();
  const onsubmit=async(e)=>{
    e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({username,email,password}),
      } );
      const response=await sendSign.json();
      if(sendSign.ok){
        alert("registration successful");

      }else{
        alert("registration failed");
      }

    } catch(error){

    }
  }

  return (
    <div  className={style.full}>
      <div className={style.login}>
        <h1 className={style.hello}>Sign up</h1>
        <div >
          <input type="username" name='username'className={style.name} placeholder='username' onChange={(e)=>setusername(e.target.value)} /><br></br>
          <input type="email" name='email'className={style.email} placeholder='email' onChange={(e)=>setemail(e.target.value)}/> <br />
          <input type="password" name='password' className={style.password} placeholder='password'onChange={(e)=>setpassword(e.target.value)} /> <br />
          <button onClick={onsubmit} type='submit' className={style.button} content='center'>SUBMIT</button>
          <br />
        </div>
        <div> <p> already you have an account? <Link to='/'>Login</Link></p></div>
      </div>
    </div>
  )
}

export default Signup
