import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './View.css';
import Navbar from './Navbar';

const ViewTeam = () => {

    const [team, setTeam] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:9000/getTeams')
        .then(response =>{
            console.log('data: ', response.data);
            setTeam(response.data);})
        .catch(err => console.log(err))
}, []);

    return (
        <body>
        <div className="info">
        <Navbar />
            <h2>View Teams</h2>
            <div className="inner-div">
                {team.map(team => (
                    <div key={team._id}>
                        <h2>{team.teamName}</h2>
                    </div>
                ))}
                        <Link to="/">Log In</Link> {}<br /><br />
                        <Link to="/SignUp">Sign Up</Link> {}<br /><br />
                        <Link to="/Home">Home</Link> {}<br /><br />
                <link rel="stylesheet" href="View.css"></link>
        </div>
        </div>
        </body>
    );
}

export default ViewTeam;