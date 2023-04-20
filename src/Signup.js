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
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Username <span className="errmsg">*</span></label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password<span className="errmsg">*</span></label>
                                        <input type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email<span className="errmsg">*</span></label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country<span className="errmsg">*</span></label>
                                        <select className="form-control">
                                            <option value="usa">USA</option>
                                            <option value="uk">UK</option>
                                            <option value="mexico">Mexico</option>
                                            <option value="japan">Japan</option>
                                            <option value="sweden">Sweden</option>
                                            <option value="peru">Peru</option>
                                            <option value="canada">Canada</option>
                                            <option value="russia">Russia</option>
                                            <option value="cuba">Cuba</option>
                                        </select>
                                    </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                            <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input type="radio" value="male" className="form-control"></input>
                                        <label>Male</label>
                                        <input type="radio" value="female" className="form-control"></input>
                                        <label>Female</label>
                                        <input type="radio" value="nonbinary" className="form-control"></input>
                                        <label>Non-Binary</label>
                                        <input type="radio" value="refuse" className="form-control"></input>
                                        <label>Prefer Not To Answer</label>
                                    </div>
                                </div>
                                </div>
                            </div>
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