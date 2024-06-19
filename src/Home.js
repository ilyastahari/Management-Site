import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import './Navbar.css';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const loggedInUser = localStorage.getItem('loggedInUser');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const user_id = localStorage.getItem('userId');
        const res = await axios.get('/getUserTeams', { params: { user_id } });
        setTeams(res.data);
      } catch (error) {
        console.error("Failed to fetch teams", error);
      }
    };

    fetchTeams();
  }, []);


  const handleSignOut = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate('/Login');
  };

  return (
    <div className="home">
      <Navbar />
      <h1>Home</h1>
      <div className="inner-div">
        {loggedInUser ? (
          <>
            <p>Welcome, {loggedInUser}</p>

            <div className="team-list">
              <h2>Your Teams</h2>
              {teams.map((team) => (
                <Link to={`/team/${team._id}`} key={team._id}>
                  {team.teamName}
                </Link>
              ))}
            </div>

            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <div className="not-logged-in">
            <p className="text-center">
              Already have an account? <Link to="/Login">Login</Link>
            </p>
            <p className="text-center">
              Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;