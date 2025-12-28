import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();

  const handleLogin = () =>{
    if(email === "admin@gmail.com" && password === "admin1234"){
      localStorage.setItem("isLoggedIn","true");
      navigate("/admin")
    }
    else{
      alert("Wrong email or password");
    }
  }
  return (
    <div style={{width: "50%", textAlign: "center", margin: "auto"}}>
        <h3>Login Page</h3>
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;