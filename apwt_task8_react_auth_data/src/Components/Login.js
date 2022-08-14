import React , {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom"

const Login = ()=>{
    let[token, setToken]= useState("");
    let[doctor_email, setEmail] = useState("");
    let[doctor_password, setPassword] =useState("");
    const navigate  = useNavigate("");


    const loginSubmit= ()=>{
        var obj = {doctor_email: doctor_email, doctor_password: doctor_password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.id, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            if(token == "No user found"){
                navigate('/login');
            }else{
                navigate('/');
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    return(
        <div class="d-flex aligns-items-center justify-content-center" >
        <form>
        <br></br>
        <h3>Login Page</h3>
        <hr></hr>
        <div className="form-group">
        <label >Email address</label>
        <input type="email" name="doctor_email" className="form-control" placeholder="Enter email" value={doctor_email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className="form-group">
        <label >Password</label>
        <input type="password" name="doctor_password" className="form-control" placeholder="Password" value={doctor_password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br></br>
        <button type="submit" onClick={loginSubmit} className="btn btn-outline-success">Login</button>
        </form>
        </div>

    )
}
export default Login;