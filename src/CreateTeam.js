import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateTeam.css';
import Navbar from './Navbar';

const  CreateTeam = () => {
    const [teamName, setTeamName] = useState('');

    const handleTeamCreate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/CreateTeam', { teamName })
            .then(response => alert('Team created successfully!'))
            .catch((err) => alert('Error'))

            setTeamName('');
    };

    return (
        <div className="create-team">
            <Navbar />
            <h2>Team Creation</h2>
            <div className="inner-div">
                <form>
                    <div className="input-group">
                    <br /><br /><br /><br /><br /><br /><label>Team Name</label><br /><br />
                        <input type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required /><br /><br />
                    </div>
                    <button type="button" onClick={(event) => handleTeamCreate(event, teamName)}> Create</button><br /><br />
                    <Link to="/">Log In</Link> {}<br /><br />
                    <Link to="/SignUp">Sign Up</Link> {}<br /><br />
                    <Link to="/Home">Home</Link> {}<br /><br />
                    <link rel="stylesheet" href="CreateTeam.css"></link>
                </form>
            </div>
        </div>
    ); 
}

export default CreateTeam;