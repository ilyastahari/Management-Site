import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './View.css';
import Navbar from './Navbar';

const CreateUserStory = () => {
    const [projects, setProjects] = useState([]);
    const [proj_name, setSelectedProject] = useState([]);
    const [priority, setPriority] = useState(0);
    const [userStory, setUserStory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/getprojectID')
            .then(function (response) {
                setProjects(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const projectOptions = projects.map((proj) => {
        return { label: proj.proj_name , value: proj._id };
    });

    const handleCreateUserStory = (event) => {
        event.preventDefault();

        const userStorydata= {
            proj_name : proj_name.value,
            userStory: userStory,
            priority : priority
        }

        console.log(userStorydata)
        axios.post('http://localhost:9000/createUserStory', userStorydata)
            .then((res) => alert('Successfully created story'))
            .catch((err) => alert('Error in Creating user story'))
    }

    return (
        <div className="create-user-story">
            <Navbar />
            <h2>Create User Story</h2>
            <div className="inner-div">
                <form>
                    <div className="input-group">
                        <label>Select Project</label><br />
                        <Select
                            isMulti= {false}
                            value={proj_name}
                            onChange={setSelectedProject}
                            options={projectOptions}
                        /><br /><br />
                        <label>Description</label><br />
                        <input type="text" placeholder="Description" value={userStory} onChange={(e) => setUserStory(e.target.value)} required /><br /><br />
                        <label>Priority</label><br />
                        <input type="number" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} /><br /><br />
                    </div>
                    <button type="button" onClick={(event) => handleCreateUserStory(event)}>Create User Story</button><br /><br />
                    <Link to="/">Log In</Link> {}<br /><br />
                    <Link to="/SignUp">Sign Up</Link> {}<br /><br />
                    <Link to="/Home">Home</Link> {}<br /><br />
                    <link rel="stylesheet" href="CreateTeam.css"></link>
                </form>
            </div>
        </div>
    );
}

export default CreateUserStory;