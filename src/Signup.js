import {useState} from "react";
import { Link } from "react-router-dom";
const SignUp = () => {

    const [newUsername, newUsernamePost]=useState();
    const [newFirstName, newFirstNamePost]=useState();
    const [newLastName, newLastNamePost]=useState();
    const [newPassword, newPasswordPost]=useState();
    const [newPhone, newPhonePost]=useState();
    const [newAddress, newAddressPost]=useState();
    const [newCountry, newCountryPost]=useState();

    const createUser = (e) => {
        e.preventDefault(); 
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={createUser}> 
                    <div className="card">
                        <div className="card-header">
                        <h2>Sign-Up</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Username <span className="errmsg">*</span></label>
                                        <input value={newUsername} onChange={e=>newUsernamePost(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>First Name <span className="errmsg">*</span></label>
                                        <input value={newFirstName} onChange={e=>newFirstNamePost(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Last Name<span className="errmsg">*</span></label>
                                        <input value={newLastName} onChange={e=>newLastNamePost(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password<span className="errmsg">*</span></label>
                                        <input value={newPassword} onChange={e=>newPasswordPost(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email<span className="errmsg">*</span></label>
                                        <input value={newPhone} onChange={e=>newPhonePost(e.target.value)} className="form-control"></input>
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
                                        <br></br>
                                        <input type="radio" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" value="female" className="app-check"></input>
                                        <label>Female</label>
                                        <input type="radio" value="nonbinary" className="app-check"></input>
                                        <label>Non-Binary</label>
                                        <input type="radio" value="refuse" className="app-check"></input>
                                        <label>N/A</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" type="submit">Register</button>
                            <a className="btn btn-danger">Back</a>
                        </div>

                    </div>

                </form>

            </div>
        
            </div>    
    );
}

export default SignUp;