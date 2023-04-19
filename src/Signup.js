import {useState} from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [newUsername, newUsernamePost]=useState();
    const [newPassword, newPasswordPost]=useState();

    const CreateUser = (e) => {
        e.preventDefault(); 
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container"> 
                    <div className="card">
                        <div className="card-header">
                        <h2>Sign-Up</h2>
                        </div>
                        <div className="card-body">

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>

                    </div>

                </form>

            </div>
        
            </div>    
    );
}

export default SignUp;