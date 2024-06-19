import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AssignUserStory.css';
import Navbar from './Navbar';

const AssignUserStory = () => {
    const [unassignedStories, setUnassignedStories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/UnassignedStories')
            .then((response) => setUnassignedStories(response.data))
            .catch((error) => console.error(error));
    }, []);
    

    const assignStory = (storyId) => {
        const userId = localStorage.getItem('loggedInUserID');
        axios.post('http://localhost:9000/AssignStory', { storyId, userId })
            .then(() => {
                setUnassignedStories(
                    unassignedStories.filter((story) => story._id !== storyId)
                );
            })
            .catch((error) => console.error(error));
    };    

    return (
        <html>
        <div className="name">
            <Navbar />
            <div className="inner-div">
            <h2>Unassigned User Stories</h2>
            <table>
                <thead>
                    <tr>
                        <th>Stories</th>
                        <th>Priority</th>
                        <th>Assign</th>
                    </tr>
                </thead>
                <tbody>
                    {unassignedStories.map((story) => (
                        <tr key={story._id}>
                            <td>{story.userStory}</td>
                            <td>{story.priority}</td>
                            <td>
                                <button onClick={() => assignStory(story._id)}>Assign</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Log In</Link> {}<br /><br />
        <Link to="/SignUp">Sign Up</Link> {}<br /><br />
        <Link to="/Home">Home</Link> {}<br /><br />
        </div>
        </div>
        </html>
    );    
};

export default AssignUserStory;