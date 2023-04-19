import {useState} from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
const Login = () => {
    const [username, usernameUpdate]=useState();
    const [password, passwordUpdate]=useState();
    const url="";

    const loginUser = (e) => {
        e.preventDefault();
        if (validate())

        fetch(url+username).then((res)=>{
            return res.json();
        }).then((resp)=>{

        }).catch((err)=>{
            toast.error('Login failed due to:'+err.message)
        })
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
                <form onSubmit={loginUser}>
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