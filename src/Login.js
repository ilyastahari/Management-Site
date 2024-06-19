import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Navbar from './Navbar';

function Login() {
  const [loginData, setLoginData] = useState({
    uname: '',
    pword: ''
  });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios.get('http://localhost:9000/getUser', { params: loginData })
        .then((res) => {
            if (res.data) {
                alert('Login Successful');
                localStorage.clear();
                localStorage.setItem('loggedInUserID', res.data._id);
                localStorage.setItem('loggedInUser', res.data.fName);
                navigate("/Home");
            } else {
                alert('Wrong Credentials');
            }
        })
        .catch((err) => alert('Error in Login'));

    setLoginData({
      uname: '',
      pword: ''
    });
  };

  const Input = (event) => {
    const { name, value } = event.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="name">
      <Navbar />
      <h1>Login</h1>
      <div className="inner-div">
        <form onSubmit={handleLogin}>
          <br /><br />
          <label htmlFor="uname"><b>Username</b></label><br />
          <input type="text" placeholder="Username" name="uname" value={loginData.uname} onChange={Input} required /><br /><br />
          <label htmlFor="pword"><b>Password</b></label><br />
          <input type="password" placeholder="Password" name="pword" value={loginData.pword} onChange={Input} required /><br /><br />
          <input type="submit" value="Submit" /><br /><br />
          <Link to="/SignUp">Sign Up</Link> {}<br /><br />
          <Link to="/Home">Home</Link> {}<br /><br />
        </form>
      </div>
    </div>
  );
}

export default Login;