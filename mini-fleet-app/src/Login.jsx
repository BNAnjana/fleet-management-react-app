import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () =>{
    if(email === "admin@gmail.com" && password === "admin1234"){
      localStorage.setItem("isLoggedIn","true");
      navigate("/admin")
    }
    else{
      setError("invalid email or password")
    }
  }
  return (
    <div style={{width: "40%", margin:"auto", marginTop: 100}}>
        <h3>Login</h3>
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{color: "red", fontSize: "20px"}}>{error}</p>}
    </div>
  )
}

export default Login;