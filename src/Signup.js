import {useState} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const SignUp = () => {

    const [newUsername, newUsernamePost]=useState("");
    const [newFirstName, newFirstNamePost]=useState("");
    const [newLastName, newLastNamePost]=useState("");
    const [newPassword, newPasswordPost]=useState("");
    const [newEmail, newEmailPost]=useState("");
    const [newPhone, newPhonePost]=useState("");
    const [newAddress, newAddressPost]=useState("");
    const [newCountry, newCountryPost]=useState("");
    const [newGender, newGenderPost]=useState("male");

    const navigate=useNavigate();

    const validate=()=>{
        let proceed=true;
        let errormessage = 'Please enter the value in '
        if (newUsername===null || newUsername === '') {
            proceed = false;
            errormessage+='Username';
        }
        if (newPassword===null || newPassword === '') {
            proceed = false;
            errormessage+='Password';
        }
        if (newFirstName===null || newFirstName=== '') {
            proceed = false;
            errormessage+='First Name';
        }
        if (newLastName===null || newLastName === '') {
            proceed = false;
            errormessage+='Last Name';
        }
        if (newEmail===null || newEmail === '') {
            proceed = false;
            errormessage+='Email';
        }
        if (newAddress===null || newAddress === '') {
            proceed = false;
            errormessage+='Address';
        }

        if (!proceed){
            toast.warning(errormessage)
        }else {
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newEmail)){

            }else{
                proceed=false;
                toast.warning('Please enter valid email.')
            }
        }
        return proceed;
    }

    const createUser = (e) => {
        e.preventDefault(); 

        let userProfile={
            
            username: newUsername,
            firstname: newFirstName,
            lastname: newLastName,
            password: newPassword,
            email: newEmail,
            phone: newPhone,
            address: newAddress,
            country: newCountry,
            gender: newGender
        };

        if (validate()) {
        fetch('http://localhost:8000/users',{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(userProfile)
        }).then((res)=>{
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(() => {
            toast.success('Registered successfully!')
            navigate('/login');
        }).catch((err)=>{
            toast.error('Failed: ' + err.message);
        });
        console.log(userProfile);
        }}
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
                                        <input value={newEmail} onChange={e=>newEmailPost(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input value={newPhone} onChange={e=>newPhonePost(e.target.value)}  className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country<span className="errmsg">*</span></label>
                                        <select value={newCountry} onChange={e=>newCountryPost(e.target.value)} className="form-control">
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
                                            <textarea value={newAddress} onChange={e=>newAddressPost(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={newGender==='male'} onChange={e=>newGenderPost(e.target.value)} value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={newGender==='female'} onChange={e=>newGenderPost(e.target.value)} value="female" className="app-check"></input>
                                        <label>Female</label>
                                        <input type="radio" checked={newGender==='nonbinary'} onChange={e=>newGenderPost(e.target.value)} value="nonbinary" className="app-check"></input>
                                        <label>Non-Binary</label>
                                        <input type="radio" checked={newGender==='refuse'} onChange={e=>newGenderPost(e.target.value)} value="refuse" className="app-check"></input>
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