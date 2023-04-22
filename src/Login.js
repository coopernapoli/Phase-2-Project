import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
const Login = () => {
    const [username, usernameUpdate]=useState();
    const [password, passwordUpdate]=useState();

    const navigate=useNavigate();

    
    const loginUser = (e) => {
        e.preventDefault();
        if (validate()){
            fetch(`http://localhost:8000/users?username=${username}`).then((res)=>{
                console.log(res)
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length===0) {
                    console.log(password)
                    toast.error('Please enter valid username.');
                }else{
                    if(resp.password === password){
                        toast.success('Logged In')
                        navigate('/')
                    } else {
                        toast.error('Please enter valid password.')
                    }
                }
            }).catch((err)=>{
                toast.error('Login Failed due to: '+err.message)
                console.log(err.message)
            })
        }
    }

    const validate = () => {
        let result = true;
        if (username === ''|| username===null){
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === ''|| password===null){
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={loginUser} className="container">
                    <div className ="card">
                        <div className="cardHeader">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username<span className="errormsg">*</span></label>
                                <input value={username}  onChange={e=>usernameUpdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password<span className="errormsg">*</span></label>
                                <input type="password" value={password} onChange={e=>passwordUpdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn primary">Login</button>
                            <Link className="btn secondary" to={'/signup'}>Sign-Up</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
