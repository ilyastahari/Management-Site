import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './View.css';
import Navbar from './Navbar';

const CreateTeamRoster = () => {
    const [teamName, setTeamName] = useState('');
    const [users, setUsers] = useState([]);
    const [team_id, setteam_id] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/getUsers')
        .then(function (response) {
          setUsers(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    
        axios.get('http://localhost:9000/getTeams')
      .then(function (response) {
        setTeam(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);

    const userOptions = users.map((user) => ({
        label: `${user.fName || ''} ${user.lName || ''}`,
        value: user._id
    }));

    const handleTeamCreateRoster = (event) => {
        event.preventDefault();
        const rosterData = {
            teamName,
            team_id,
            users: selectedUsers.map(user => user.value),
        };
        axios.post('http://localhost:9000/CreateTeamRoster', rosterData)
            .then(response => alert('Roster created successfully!'))
            .catch((err) => alert('Error creating team roster'));

        setSelectedUsers([]);
    };

    return (
        <div className="create-team">
            <Navbar />
            <h2>Create Team Roster</h2>
            <div className="inner-div">
                <form onSubmit={handleTeamCreateRoster}>
                    <div className="input-group">
                    </div>
                    <label htmlFor="team"><b>Team</b></label><br />
                    <select onChange={(e) => setteam_id(e.target.value)} value={team_id}>
                        <option value="">Select Team</option>
                        {team.map((team1, index) => (
                        <option key={index} value={team1._id}>
                            {team1.teamName}
                        </option>
                        ))}
                    </select><br /><br />
                    <Select
                        options={userOptions}
                        isMulti
                        onChange={setSelectedUsers}
                        value={selectedUsers}
                    /><br />
                    <button type="submit">Create</button><br /><br />
                    <Link to="/">Log In</Link> {}<br /><br />
                    <Link to="/SignUp">Sign Up</Link> {}<br /><br />
                    <Link to="/Home">Home</Link> {}<br /><br />
                </form>
            </div>
        </div>
    );
}

export default CreateTeamRoster;