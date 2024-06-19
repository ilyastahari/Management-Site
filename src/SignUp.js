import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import Navbar from './Navbar';

function SignUp() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    uname: '',
    pword: ''
});

  const handleSignUp = (event) => {
    event.preventDefault();


    axios.post('http://localhost:9000/createUser', formData)
            .then((res) => alert('Sucessfully Signed Up!'))
            .catch((err) => alert('Error in Signing Up'))


        setFormData({
            fName: '',
            lName: '',
            uname: '',
            pword: ''
        });
  };

  const Input = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <html>
    <div className="name">
    <Navbar />
      <h1>Sign Up</h1>
      <div className="inner-div">
        <form onSubmit={handleSignUp}>
          <br /><br />
          <label htmlFor="fName"><b>First Name</b></label><br />
          <input type="text" placeholder="First Name" name="fName"  required value={formData.fName} onChange={Input} /><br /><br />
          <label htmlFor="lName"><b>Last Name</b></label><br />
          <input type="text" placeholder="Last Name" name="lName"  required value={formData.lName} onChange={Input} /><br /><br />
          <label htmlFor="uname"><b>Username</b></label><br />
          <input type="text" placeholder="Username" name="uname"  required value={formData.uname} onChange={Input}/><br /><br />
          <label htmlFor="pword"><b>Password</b></label><br />
          <input type="password" placeholder="Password" name="pword" required value={formData.pword} onChange={Input}  /><br /><br />
          <input type="submit" value="Submit" /><br /><br />
          <Link to="/">Log In</Link> {}
          <br /><br />
          <Link to="/">Log In</Link> {}<br /><br />
          <Link to="/SignUp">Sign Up</Link> {}<br /><br />
          <Link to="/Home">Home</Link> {}<br /><br />
          <link rel="stylesheet" href="SignUp.css"></link>
        </form>
      </div>
    </div>
    </html>
  );
}

export default SignUp;