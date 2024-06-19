import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './View.css';
import Navbar from './Navbar';

const ViewProject = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

            axios.get('http://localhost:9000/getProjects')
            .then(response =>{
                console.log('data: ', response.data);
                setProjects(response.data);})
            .catch(err => console.log(err))
    }, []);

    return (
      <body>
        <div className="info">
        <Navbar />
            <h2>View Projects</h2>
            <div className="inner-div">
            {projects.map(project => (
                <div key={project._id}>
                    <h2>{project.proj_name}</h2>
                    <p>Description: {project.proj_desc}</p>
                    <p>Manager: {project.mgr_id.fName} {project.mgr_id.lName}</p>
                    <p>Owner: {project.prod_owner_id.fName} {project.prod_owner_id.lName}</p>
                    <p>Team: {project.team_id.teamName}</p>
                    <hr/>
                </div>
                )
                )}
                        <Link to="/">Log In</Link> {}<br /><br />
                        <Link to="/SignUp">Sign Up</Link> {}<br /><br />
                        <Link to="/Home">Home</Link> {}<br /><br />
                <link rel="stylesheet" href="View.css"></link>
        </div>
        </div>
    </body>
    );
}

export default ViewProject;