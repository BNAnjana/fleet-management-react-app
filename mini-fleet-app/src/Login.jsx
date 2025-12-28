import {useState, useRef, useEffect, useNavigate} from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin1234"){
            alert("Login Success");
            navigate("/admin");
            }
            else{
                alert("Wrong email or password");
            }
    }
    return(
        <div>
            <h2>Login Page</h2>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;